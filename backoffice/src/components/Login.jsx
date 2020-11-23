import React, {Component} from 'react';
import '../App.css';
import {Form, Button, FormGroup,Input, Label} from  'reactstrap';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: '',

        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange= this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange=(event) =>{
        this.setState({
            username: event.target.value
        });
    }
    handlePasswordChange=(event)=>{
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit=(event)=> {

        event.preventDefault();
        console.log(this.state);

        localStorage.setItem("username",this.state.username);
        localStorage.setItem("password",this.state.password);

        this.props.history.push("/list");

    }

    render() {
        return (
            <Form className="login-form">

                <h2>Login</h2>
                <FormGroup>
                    <Label>UserName</Label>
                    <Input type="text" value={this.state.username} placeholder="username" onChange={this.handleUsernameChange} />

                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password"  value={this.state.password} placeholder="password" onChange={this.handlePasswordChange} />

                </FormGroup>
                <Button className="btn-lg btn-dark btn-block" onClick={this.handleSubmit}>Login</Button>

            </Form>

        );
    }
}

export default Login;