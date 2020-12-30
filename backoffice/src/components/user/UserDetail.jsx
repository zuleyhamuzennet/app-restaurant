import React, {Component} from 'react';
import Header from "../Header";
import UserService from "../service/UserService";
import {AuthContext} from "../contexts/AuthContext";

class UserDetail extends Component {
    static contextType=AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.history.location.state?.id,
            user: []
        }
    }

    componentDidMount() {
        const {username,password}=this.context;
        UserService.getPersonById(this.state.id,username,password).then((res) => {
            this.setState({user: res.data});
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="col-sm-12 mt-2">

                        <div className="row">
                            <div className="card col-sm-4">
                                <div className="card-header"> User Detail</div>
                                <div className="card-body">
                                    <h2>Username :{this.state.user.name}</h2>
                                    <p>E-Mail :{this.state.user.email}</p>
                                    <p>Password :{this.state.user.password}</p>
                                    <p>
                                        Roles :
                                        {
                                            this.state.user.roles.map(
                                                role =>
                                                    role.name + " ,")
                                        }</p>
                                </div>
                            </div>
                            <div className="card col-sm-8">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetail;