import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import Header from "./Header";


class MainPage extends Component {



    productGO=(event)=> {

        event.preventDefault();

        this.props.history.push("/products");

    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container bg-light">
                    <div className='row'>
                        <div style={{marginBottom: "20px"}} className="col-md-4 ">
                            <div className="card text-center">
                                <div className="overflow">
                                    <img src="http://placehold.jp/300x150.png" alt="Image1"
                                         className="card-img-top"></img>
                                </div>
                                <div className="p-2 text-dark text-white" style={{
                                    position: 'absolute',
                                    width: '100%',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    top: '0px',
                                    bottom: '0px',
                                }}>
                                    <h5 className=" text-white"></h5>
                                    <p className=" text-white"></p>
                                    <button className="btn btn-info"
                                    >Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "20px"}} className="col-md-4">
                            <div className="card text-center">
                                <div className="overflow">
                                    <img src="http://placehold.jp/300x150.png" alt="Image1"
                                         className="card-img-top"></img>
                                </div>
                                <div className="p-2 text-dark text-white" style={{
                                    position: 'absolute',
                                    width: '100%',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    top: '0px',
                                    bottom: '0px',
                                }}>
                                    <h5 className=" text-white"></h5>
                                    <p className=" text-white">Masalar</p>
                                    <button className="btn btn-info"
                                    >
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "20px"}} className="col-md-4">
                            <div className="card text-center">
                                <div className="overflow">
                                    <img src="http://placehold.jp/300x150.png" alt="Image1"
                                         className="card-img-top"></img>
                                </div>
                                <div className="p-2 text-dark text-white" style={{
                                    position: 'absolute',
                                    width: '100%',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    top: '0px',
                                    bottom: '0px',
                                }}>
                                    <h5 className=" text-white"></h5>
                                    <p className=" text-white"></p>
                                    <button className="btn btn-info"
                                    >Rapors
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "20px"}} className="col-md-4 ">
                            <div className="card text-center">
                                <div className="overflow">
                                    <img src="http://placehold.jp/300x150.png" alt="Image1"
                                         className="card-img-top"></img>
                                </div>
                                <div className="p-2 text-dark text-white" style={{
                                    position: 'absolute',
                                    width: '100%',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    top: '0px',
                                    bottom: '0px',
                                }}>
                                    <h5 className=" text-white"></h5>
                                    <p className=" text-white"></p>

                                    <button className="btn btn-info"
                                            onClick={this.productGo} >Products
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "20px"}} className="col-md-4 ">
                            <div className="card text-center">
                                <div className="overflow">
                                    <img src="http://placehold.jp/300x150.png" alt="Image1"
                                         className="card-img-top"></img>
                                </div>
                                <div className="p-2 text-dark text-white" style={{
                                    position: 'absolute',
                                    width: '100%',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    top: '0px',
                                    bottom: '0px',
                                }}>
                                    <h5 className=" text-white"></h5>
                                    <p className=" text-white"></p>
                                    <button className="btn btn-info"
                                    >Users
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "20px"}} className="col-md-4 ">
                            <div className="card text-center">
                                <div className="overflow">
                                    <img src="http://placehold.jp/300x150.png" alt="Image1"
                                         className="card-img-top"></img>
                                </div>
                                <div className="p-2 text-dark text-white" style={{
                                    position: 'absolute',
                                    width: '100%',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    top: '0px',
                                    bottom: '0px',
                                }}>
                                    <h5 className=" text-white"></h5>
                                    <p className=" text-white"></p>
                                    <button className="btn btn-info"
                                    >Null
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "20px"}} className="col-md-4 ">
                            <div className="card text-center">
                                <div className="overflow">
                                    <img src="http://placehold.jp/300x150.png" alt="Image1"
                                         className="card-img-top"></img>
                                </div>
                                <div className="p-2 text-dark text-white" style={{
                                    position: 'absolute',
                                    width: '100%',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    top: '0px',
                                    bottom: '0px',
                                }}>
                                    <h5 className=" text-white"></h5>
                                    <p className=" text-white"></p>

                                    <button className="btn btn-info"
                                    >Null
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "20px"}} className="col-md-4 ">
                            <div className="card text-center">
                                <div className="overflow">
                                    <img src="http://placehold.jp/300x150.png" alt="Image1"
                                         className="card-img-top"></img>
                                </div>
                                <div className="p-2 text-dark text-white" style={{
                                    position: 'absolute',
                                    width: '100%',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    top: '0px',
                                    bottom: '0px',
                                }}>
                                    <h5 className=" text-white"></h5>
                                    <p className=" text-white"></p>

                                    <button className="btn btn-info"
                                    >Null
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "20px"}} className="col-md-4 ">
                            <div className="card text-center">
                                <div className="overflow">
                                    <img src="http://placehold.jp/300x150.png"
                                         className="card-img-top"></img>
                                </div>
                                <div className="p-2 text-dark text-white" style={{
                                    position: 'absolute',
                                    width: '100%',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    top: '0px',
                                    bottom: '0px',
                                }}>
                                    <h5 className=" text-white"></h5>
                                    <p className=" text-white"></p>

                                    <button className="btn btn-info"
                                    >Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainPage;