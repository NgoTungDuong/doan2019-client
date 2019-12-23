import React, { Component } from "react";
import { Result, Button, Icon, Typography } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
const { Paragraph } = Typography;


export default class CheckResult extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000);
    }
    state = {
        isLoading: true
    }
    render() {
        return (
            <div>
                {this.props.fileSuccess === "true" ? (
                    (this.state.isLoading ? (
                        <div className="spinner-border text-light" style={{width: "3rem", height: "3rem"}} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (
                        <div style={{backgroundColor: "white"}}>
                            <Result
                                status="success"
                                title="Successfully ! Your File Is Correct"
                                extra={
                                    <Link to='/'>
                                        <Button type="primary" key="console">
                                            Go Home
                                        </Button>
                                    </Link>
                                }
                            >
                                <div>
                                    <div className="text-center mb-3">
                                        <img style={{width: "50%", display: "inline"}} src={`https://ipfs.infura.io/ipfs/${this.props.fileHash}`} alt="img" />
                                    </div>
                                    <h3>Your Infomation</h3>
                                    <h6>File Name: Cong Chung CMT</h6>
                                    <h6>Created At: 17/12/2019-15:08pm</h6>
                                </div>
                            </Result>
                        </div>
                    ))
                ) : (
                    (this.state.isLoading ? (
                        <div className="spinner-border text-light" style={{width: "3rem", height: "3rem"}} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (
                        <div style={{backgroundColor: "white"}}>
                            <Result
                                status="error"
                                title="Submission Failed"
                                extra={
                                    <Link to='/'>
                                        <Button type="primary" key="console">
                                            Go Home
                                        </Button>
                                    </Link>
                                }
                            >
                                <div>
                                <Paragraph>
                                    <Icon style={{color:"red"}} type="close-circle" /> Your file failed 
                                </Paragraph>
                                </div>
                            </Result>
                        </div>
                    ))
                ) }
            </div>
        );
    }
}

