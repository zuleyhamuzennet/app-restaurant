import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import Header from "./Header";


class MainPage extends Component {



    render() {
        return (
            <div>
                <Header/>
                <br/><br/>

                <div className="container">
                    <div className='row'>
                        <div style={{marginBottom: "15px"}} className="col-md-4 ">
                            <a href="/products">
                            <Card style={{height:'150px',
                            width:'300px', textAlign:'center'}}>

                            <h2 style={{textAlign :"center"}}>Products</h2>
                            </Card>
                            </a>
                        </div>
                        <div style={{marginBottom: "10px"}} className="col-md-4 ">
                            <a href="/table-category">
                            <Card style={{height:'150px',
                                width:'300px'}}
                            >
                                <h2 style={{textAlign :"center"}}>Tables</h2>
                            </Card>
                            </a>
                        </div>
                        <div style={{marginBottom: "10px"}} className="col-md-4 ">
                            <a>
                            <Card style={{height:'150px',
                                width:'300px'}}

                            >
                                <h2 style={{textAlign :"center"}}>Rapors</h2>
                            </Card>
                            </a>
                        </div>
                        <div style={{marginBottom: "10px"}} className="col-md-4 ">
                            <a>
                            <Card style={{height:'150px',
                                width:'300px'}}

                            >
                                <h2 style={{textAlign :"center"}}>Cart</h2>
                            </Card></a>
                        </div>
                        <div style={{marginBottom: "15px"}} className="col-md-4 ">
                            <a>
                            <Card style={{height:'150px',
                                width:'300px'}}

                            >
                                <h2 style={{textAlign :"center"}}>Users</h2>
                            </Card></a>
                        </div>
                        <div style={{marginBottom: "10px"}} className="col-md-4 ">
                            <Card style={{height:'150px',
                                width:'300px'}}

                            />
                        </div>
                        <div style={{marginBottom: "10px"}} className="col-md-4 ">
                            <Card style={{height:'150px',
                                width:'300px'}}

                            />
                        </div>
                        <div style={{marginBottom: "10px"}} className="col-md-4 ">
                            <a>
                            <Card style={{height:'150px',
                                width:'300px'}}
                                  description='Tables'
                            >
                                <h2 style={{textAlign :"center"}}></h2>
                            </Card>
                            </a>
                        </div>
                        <div style={{marginBottom: "15px"}} className="col-md-4 ">
                            <a href="/">
                            <Card style={{height:'150px',
                                width:'300px'}}
                                  description='Tables'
                            >
                                <h2 style={{textAlign :"center"}}>Logout</h2>
                            </Card>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainPage;