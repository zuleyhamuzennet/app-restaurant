import React, {Component} from 'react';
import PersonService from "./PersonService";

class AddPerson extends Component {

    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: '',
            role: ''

        }
        this.changeUserNameHandler= this.changeUserNameHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.savePerson=this.savePerson.bind(this);
    }

    savePerson=(e)=>{
        e.preventDefault();
        let person={username: this.state.username,
            password:this.state.password,
            role: this.state.role};
        console.log('person =>'+ JSON.stringify(person));


            PersonService.addPerson(person).then(res=> {
                this.props.history.push('/listuser');

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
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add User</h3>
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

                                    <button className="btn btn-success" onClick={this.savePerson}>Save</button>
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

export default AddPerson;