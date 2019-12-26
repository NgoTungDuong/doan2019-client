import React from 'react';
import { MDBMask, MDBRow, MDBCol, MDBView, MDBContainer } from 'mdbreact';
import '../css/maincontent.css';
import DropFile from '../component/DropFile';
import CreateFile from '../component/CreateFile';
import { BrowserRouter, Route } from 'react-router-dom';
import CheckResult from '../component/CheckResult';

class MainContent extends React.Component {
    render() {
        return (
            <div id="videobackground">
                <MDBView>
                <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline
                    autoPlay muted="" loop>
                    <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4" />
                    </video>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer className="px-md-3 px-sm-0">
                            <MDBRow>
                                <MDBCol md="12" className="mb-5 white-text text-center">
                                    <BrowserRouter>
                                        <Route exact path='/' render={(props) => <DropFile {...props} handleOnclick={this.props.handleOnclick}/>} />
                                        <Route path='/create-file' render={(props) => <CreateFile {...props} handleOnsubmit={this.props.handleOnsubmit} onLoadDataDownload={this.props.onLoadDataDownload}/>} />
                                        {/* {this.props.fileHash ? <Route patch='/result' render={(props) => <Result {...props} fileHash={this.props.fileHash}/>} /> : null} */}
                                        <Route path='/result' render={(props) => <CheckResult {...props} fileSuccess={this.props.fileSuccess} fileHash={this.props.fileHash} fileName={this.props.fileName} createdAt={this.props.createdAt}/>} />
                                    </BrowserRouter>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>

                <MDBContainer>
                    <MDBRow className="mt-1">
                        <MDBCol md="12" className="text-center">
                            <p style={{marginBottom: "4px", color: "blue"}}>
                                <strong>Copy Right © 2019 by CoBau</strong>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default MainContent;