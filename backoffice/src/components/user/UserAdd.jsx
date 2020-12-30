import React, {Component} from 'react';
import PersonService from "../service/UserService";
import Header from "../Header";
import {Link} from "react-router-dom";
import RoleService from "../service/RoleService";
import {AuthContext} from "../contexts/AuthContext";

class UserAdd extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            roles: [],
            multiSelect: []
        }
        this.changeMultiSelect = this.changeMultiSelect.bind(this);
    }

    savePerson = (e) => {
        const user = this.context;
        e.preventDefault();
        let users = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            userListId: this.state.multiSelect
        };
        PersonService.addPerson(users, user.username, user.password).then(res => {
            this.props.history.push('/listuser');
        });
    }

    componentDidMount() {
        const user = this.context;
        RoleService.listAllRole(user.username, user.password).then((res) => {
            this.setState({roles: res.data})
        });
    }

    changeMultiSelect(id) {
        if (this.state.multiSelect.includes(id) !== true) {
            this.state.multiSelect.push(id);
            console.log("multiselect= ekle", this.state.multiSelect)
        } else {
            for (let i = 0; i < this.state.multiSelect.length; i++) {
                if (id === this.state.multiSelect[i]) {
                    this.state.multiSelect.splice(i, 1);
                    console.log("multiselect= sil", this.state.multiSelect)
                }
            }
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add User</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input placeholder="User Name" name="username" className="form-control"
                                               value={this.state.username} onChange={(e) => {
                                            this.setState({username: e.target.value})
                                        }}/>
                                    </div>
                                    <div className="form-group">
                                        <label>E-Mail</label>
                                        <input placeholder="User Name" name="username" className="form-control"
                                               value={this.state.email} onChange={(e) => {
                                            this.setState({email: e.target.value})
                                        }}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input placeholder="Password" name="password" className="form-control"
                                               value={this.state.password} onChange={(e) => {
                                            this.setState({password: e.target.value})
                                        }}/>

                                    </div>
                                    <div className="form-group">
                                        <label> Role </label>
                                        <div className="checkbox" style={{height: "4rem", overflow: "auto"}}>
                                            {
                                                this.state.roles.map(
                                                    role =>
                                                        <div className="row col-md -12" key={role.id}>
                                                            <label><input type="checkbox" value=""
                                                                          onClick={() => this.changeMultiSelect(role.id)}/>{role.name}
                                                            </label>
                                                        </div>
                                                )
                                            }
                                        </div>

                                    </div>

                                    <button className="btn btn-success" onClick={this.savePerson}>Save</button>
                                    <Link to="/listuser" className="btn btn-danger">Cancel
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserAdd;