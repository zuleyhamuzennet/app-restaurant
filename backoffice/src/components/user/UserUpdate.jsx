import React, {Component} from 'react';
import PersonService from "../service/UserService";
import Header from "../Header";

class UserUpdate extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.match.params.id,
            username: '',
            password: '',
            role: ''

        }
        this.changeUserNameHandler= this.changeUserNameHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.updatePerson=this.updatePerson.bind(this);
    }
    componentDidMount() {
        PersonService.getPersonById(this.state.id)
            .then((response)=>{
                let person= response.data;
                this.setState({username:person.username,
                password:person.password,
                    role:person.role
                } )
            });
    }

    updatePerson=(e)=>{
        e.preventDefault();
        let person={username: this.state.username, password:this.state.password, role: this.state.role};
        console.log('person =>'+ JSON.stringify(person));
        PersonService.updatePerson(person,this.state.id)
            .then(response=>{
                this.props.history.push('/list');
            })
        PersonService.updatePerson(person, this.state.id)
            .then(res=>{
                this.props.history.push('/list');
            });

    }


    changeUserNameHandler=(event)=>{
        this.setState({username: event.target.value});
    }
    changePasswordHandler=(event)=>{
        this.setState({password: event.target.value});
    }
    changeRoleHandler=(event)=>{
        this.setState({role: event.target.value});
    }

    cancel(){
        this.props.history.push('/list');
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update User</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input placeholder="User Name" name="username" className="form-control"
                                               value={this.state.username} onChange={this.changeUserNameHandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input placeholder="Password" name="password" className="form-control"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Role</label>
                                        <input placeholder="User Name" name="username" className="form-control"
                                               value={this.state.role} onChange={this.changeRoleHandler}/>

                                    </div>

                                    <button className="btn btn-success" onClick={this.updatePerson}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserUpdate;