import React, {Component} from 'react';
import '../App.css';
import {Form, Button, FormGroup, Input, Label} from 'reactstrap';


class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''

        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log(this.state);

        localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password);

        this.props.history.push("/main");


    }

    render() {
        return (

            <div className="social-box">
                <div className="login-container">
                    <div className="login-wrapper">

                        <h2>Login</h2>
                        <div className="ui input login-item">
                            <Input type="text" value={this.state.username} placeholder="username"
                                   onChange={this.handleUsernameChange}/>
                        </div>
                        <div className="ui input login-item">
                            <Input type="password" value={this.state.password} placeholder="password"
                                   onChange={this.handlePasswordChange}/>
                        </div>
                        <Button className="btn-lg btn-dark btn-block" onClick={this.handleSubmit}>Login</Button>
                    </div>

                </div>
            </div>

        );
    }
}

export default Login;