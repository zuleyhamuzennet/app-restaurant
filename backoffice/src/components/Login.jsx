import React, {Component} from 'react';
import '../App.css';
import {Button, Input} from 'reactstrap';
import axios from 'axios';
import Loading from "./Loading";
import {AuthContext} from "./contexts/AuthContext";
import {Redirect} from "react-router-dom";

class Login extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isChecked: false,
            loadingVisible: false
        };
    }

    onChangeCheckbox = event => {
        this.setState({
            isChecked: event.target.checked
        })
    }
    handleSubmit = (event) => {
        const {setContextState}=this.context;
       setContextState({username:this.state.username,password:this.state.password, authorize:this.state.isChecked})

        event.preventDefault();
        axios.get('http://localhost:8080/login/', {
            auth: {
                username: this.state.username,
                password: this.state.password
            }
        })
            .then(res => {
                this.setState({
                    loadingVisible: true
                });
                if (res.status === 200) {
                    this.props.history.push("/list");
                    this.setState({loadingVisible: false});
                } else {
                    this.props.history.push("/");
                    this.setState({loadingVisible: false});
                }
                if (this.state.isChecked) {
                    localStorage.setItem("username", this.state.username);
                    localStorage.setItem("password", this.state.password);
                    localStorage.setItem("rememberMe", this.state.isChecked)
                    this.setState({loadingVisible: false});
                }
            })
            .catch(err => {
                window.alert("Username or Password wrong!!");
            })
    }

    toggleRememberMe = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }
    componentDidMount() {
        const contextState=this.context;
        if(contextState.authorize==true){
            this.setState({username:contextState.username, password:contextState.password, isChecked:true})
        }
    }

    render() {
        return (
            <AuthContext.Consumer>
                {
                    ({authorize, signIn}) =>
                        (authorize ? (<Redirect to='/list'/>) : (
                            <div className="social-box">
                                <div className="login-container">
                                    <div className="login-wrapper">
                                        <h2>BackOffice Login</h2>
                                        <div className="ui input login-item">
                                            <Input type="text" value={this.state.username} placeholder="username"
                                                   onChange={(e) => {
                                                       this.setState({username: e.target.value})
                                                   }}/>
                                        </div>
                                        <div className="ui input login-item">
                                            <Input type="password" value={this.state.password} placeholder="password"
                                                   onChange={(e) => {
                                                       this.setState({password: e.target.value})
                                                   }}/>
                                        </div>
                                        <div>
                                            <tr>
                                                <td colSpan="2">
                                                    <input type="checkbox" className="form-control" id="rememberMe"
                                                           name="rememberMe" checked={this.state.isChecked}
                                                           onChange={this.toggleRememberMe}/>
                                                    <label>Remember me</label></td>
                                            </tr>
                                        </div>
                                        <Button className="btn-lg btn-dark btn-block" onClick={() => {
                                            debugger;
                                            const username = this.state.username;
                                            const password = this.state.password;
                                            signIn({username, password});
                                        }}>Login</Button>
                                    </div>
                                </div>
                                {
                                    this.state.loadingVisible ?
                                        <Loading/> : null
                                }
                            </div>
                        ))
                }
            </AuthContext.Consumer>
        );
    }
}

export default Login;