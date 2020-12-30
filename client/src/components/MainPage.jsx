import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import Header from "./Header";
import ContextUser from "./ContextUser";


class MainPage extends Component {
    static contextType=ContextUser;

    goTables=()=>{
        this.props.history.push({
                pathname: "/table-category"
            }
        );
    }
    goProduct=()=>{
        this.props.history.push({
                pathname: "/list-customer"
            }
        );
    }
    logout=()=>{
        if (localStorage.getItem('username') !== null) {
            localStorage.removeItem('username');
        }
        if (localStorage.getItem('password') !== null) {
            localStorage.removeItem('password');
        }

        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <Header/>
                <br/><br/>

                <div className="container">
                    <div className='row'>
                        <div style={{marginBottom: "15px"}} className="col-md-4 ">
                            <div onClick={()=>this.goProduct()}>
                            <Card style={{height:'150px',
                            width:'300px', textAlign:'center'}}>

                            <h2 style={{textAlign :"center"}}>Products</h2>
                            </Card>
                            </div>
                        </div>
                        <div style={{marginBottom: "10px"}} className="col-md-4 ">
                            <div onClick={()=>this.goTables()}>
                            <Card style={{height:'150px',
                                width:'300px'}}
                            >
                                <h2 style={{textAlign :"center"}}>Tables</h2>

                            </Card>
                            </div>
                        </div>
                        <div style={{marginBottom: "10px"}} className="col-md-4 ">
                            <div>
                            <Card style={{height:'150px',
                                width:'300px'}}

                            >
                                <h2 style={{textAlign :"center"}}>Rapors</h2>
                            </Card>
                            </div>
                        </div>
                        <div style={{marginBottom: "10px"}} className="col-md-4 ">
                            <div >
                            <Card style={{height:'150px',
                                width:'300px'}}

                            >
                                <h2 style={{textAlign :"center"}}>Cart</h2>
                            </Card></div>
                        </div>
                        <div style={{marginBottom: "15px"}} className="col-md-4 ">
                            <div onClick={(e)=>this.props.history.push("/list-customer")}>
                            <Card style={{height:'150px',
                                width:'300px'}}

                            >
                                <h2 style={{textAlign :"center"}}>Users</h2>
                            </Card></div>
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
                            <div >
                            <Card style={{height:'150px',
                                width:'300px'}}
                                  description='Tables'
                            >
                                <h2 style={{textAlign :"center"}}></h2>
                            </Card>
                            </div>
                        </div>
                        <div style={{marginBottom: "15px"}} className="col-md-4 ">
                            <div onClick={()=>this.logout()}>
                            <Card style={{height:'150px',
                                width:'300px'}}
                                  description='Tables'
                            >
                                <h2 style={{textAlign :"center"}}>Logout</h2>
                            </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainPage;