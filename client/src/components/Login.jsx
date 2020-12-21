import React, {Component} from 'react';
import '../App.css';
import { Button, Input} from 'reactstrap';
import axios from 'axios';
import ContextUser from "./ContextUser";
import Loading from "./Loading";


class Login extends Component {
    static contextType=ContextUser;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isChecked:false,
            loadingVisible:false

        };

    }
    onChangeCheckbox = event => {
        this.setState({
            isChecked: event.target.checked
        })
    }

    handleSubmit = (event) => {
        const {setUsername}=this.context;
        const {setPassword}=this.context;
        setUsername(this.state.username);
        setPassword(this.state.password);

        event.preventDefault();

        axios.get('http://localhost:8080/login/',{

            auth:{

                username:this.state.username,
                password:this.state.password

            }
        })
            .then(res=>{
                this.setState({
                    loadingVisible: true
                });
                if(res.status===200){
                    this.props.history.push("/main");
                    this.setState({
                        loadingVisible: false
                    });
                }
                else {
                    this.props.history.push("/");
                    window.alert("USERNAME or PASSWORD WRONG!!")
                }
                if(this.state.isChecked){
                    localStorage.setItem("username", this.state.username);
                    localStorage.setItem("password", this.state.password);
                }
                console.log("login",res.status)
            })
            .catch(err=>{
                console.log("erorr",err.status)
            })


    }

    toggleRememberMe=()=> {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }
    componentDidMount() {

    }


    render() {
        return (


            <div className="social-box">
                <div className="login-container">
                    <div className="login-wrapper">

                        <h2>Login</h2>
                        <div className="ui input login-item">
                            <Input type="text" value={this.state.username} placeholder="username"
                                   onChange={(e)=>{this.setState({  username: e.target.value})}}/>
                        </div>
                        <div className="ui input login-item">
                            <Input type="password" value={this.state.password} placeholder="password"
                                   onChange={(e)=>{this.setState({  password: e.target.value})}}/>
                        </div>
                            <div>

                                <tr>
                                    <td colSpan="2">
                                        <input type="checkbox" className="form-control"  id="rememberMe" name="rememberMe" checked={this.state.isChecked} c onChange={this.toggleRememberMe} />
                                        <label>Remember me</label></td>
                                </tr>
                            </div>
                        <Button className="btn-lg btn-dark btn-block" onClick={this.handleSubmit.bind(this)}>Login</Button>
                    </div>

                </div>
                {
                    this.state.loadingVisible?
                        <Loading/>:null
                }
            </div>

        );
    }
}

export default Login;