import React, { Component } from "react";
import { Button, Icon } from 'antd'; 
import { Link } from 'react-router-dom';
import '../css/dropfile.css'
import 'antd/dist/antd.css';
export default class DropFile extends Component {
    state = {
        fileName: '',
        transactionHash: ''
    }
    handleOnChange = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile) {
            const fileReader = new FileReader();
            fileReader.readAsText(imageFile);
            fileReader.onloadend = (data) => {
                const result = JSON.parse(data.target.result)
                this.setState({
                    fileName: result.fileName,
                    transactionHash: result.transactionHash
                });
            };
        } else {
            this.setState({
                fileName: '',
                transactionHash: ''
            })
        }
    }
    onClick = (event) => {
        // console.log(this.state)
        event = this.state.transactionHash
        this.props.handleOnclick(event)
    }
    
    render() {
        return (
            <div style={{marginBottom: "15%"}}>
                <div>
                    <input type="file" accept="application/json" onChange={this.handleOnChange} style={{cursor: "pointer"}}/>
                </div>
                {this.state.fileName && this.state.transactionHash ? (
                    <Link to='/result'>
                        <Button size="large" type="primary" className="mt-5" onClick={this.onClick}>
                            <Icon id="icon" type="check" />
                            Check File
                        </Button>
                    </Link>
                ) : (
                    <Link disabled to='/result'>
                        <Button disabled size="large" type="primary" className="mt-5" onClick={this.onClick}>
                            <Icon id="icon" type="check" />
                            Check File
                        </Button>
                    </Link>
                )}
                <Link to='/create-file'>
                    <Button  size="large" type="danger" className="ml-5">
                        <Icon id="icon" type="plus" />
                        Create File
                    </Button>
                </Link>

            </div>
        );
    }
}

