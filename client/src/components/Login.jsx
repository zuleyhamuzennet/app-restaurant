import React, {Component} from 'react';
import '../App.css';
import {Form, Button, FormGroup, Input, Label} from 'reactstrap';

import axios from 'axios';
import {UserContext} from "./Context";


class Login extends Component {
    static contextType = UserContext;


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userList:'',
            isChecked:false

        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     //   this.myFunction=this.myFunction.bind(this);
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
    onChangeCheckbox = event => {
        this.setState({
            isChecked: event.target.checked
        })
    }

    handleSubmit = (event) => {
        const{setUsername,setToken}=this.context;
        event.preventDefault();
        console.log(this.state);

        localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password);

        this.props.history.push("/main");



  /*      const { password, isChecked } = this.state
        if (isChecked &amp;&amp; username !== "") {
            localStorage.password = password
            localStorage.checkbox = isChecked
        }*/
    /*    if (this.state.userList.filter(user=>(user.username===this.state.username)&&(user.password.substring(6,user.password.size)===this.state.password)).length>0){
            setToken('Basic'+btoa(this.state.username+':'+this.state.password))
            setUsername(this.state.username);
            this.props.history.push("/main");
        }else{
            this.props.history.push("/");
            window.alert("giriş başarısız");
        }*/

    }
    componentDidMount() {
    console.log(this.context);
        if(localStorage.getItem("password")!==null){
        localStorage.getItem("username");
        localStorage.getItem("password");
            this.props.history.push('/main');
        }else {

            axios.get('http://localhost:8080/users/list',
            {headers:{Authorization:'Basic'+btoa('user1:pass1')}
            }).then((res)=>{
                this.setState({userList:res.data});
                console.log("userList",res.data)
            });

        }
    }


    render() {
        const { email, password, isChecked } = this.state
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


                            <div>

                                <tr>
                                    <td colSpan="2">
                                        <input type="checkbox" checked={isChecked} name="lsRememberMe" onChange={this.onChangeCheckbox} />
                                        <label>Remember me</label></td>
                                </tr>
                            </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Login;