import React, {Component} from 'react';
import Header from "../Header";
import RoleService from "../service/RoleService";
import UserService from "../service/UserService";
import {Link} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";

class UserUpdate extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.history.location.state?.id,
            username: '',
            password: '',
            email: '',
            roles: [],
            multiRole: [],
        }
        this.changeMultiSelect = this.changeMultiSelect.bind(this);
    }

    changeMultiSelect(id) {
        console.log("role id:", id);
        if (this.state.multiRole.includes(id) !== true) {
            this.state.multiRole.push(id);
        } else {
            for (let i = 0; i < this.state.multiRole.length; i++) {
                if (id === this.state.multiRole[i]) {
                    this.state.multiRole.splice(i, 1);
                }
            }
        }
    }

    componentDidMount() {
        const user = this.context;
        UserService.getPersonById(this.state.id, user.username, user.password)
            .then((res) => {
                this.setState({
                    id: res.data.id,
                    username: res.data.username,
                    password: res.data.password,
                    email: res.data.email,
                    multiSelect: res.data.userListId
                });
            });
        RoleService.listAllRole(user.username, user.password).then((res) => {
            this.setState({roles: res.data});
        })
    }

    updateUser = (e) => {
        const user = this.context;
        e.preventDefault();
        let person = {
            id: this.state.id,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            userListId: this.state.multiRole
        };
        UserService.updatePerson(person, user.username, user.password)
            .then(response => {
                this.props.history.push('/listuser');
            })
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
                                               value={this.state.username} onChange={(e) => {
                                            this.setState({username: e.target.value})
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
                                        <label>E-Mail</label>
                                        <input placeholder="User Name" name="username" className="form-control"
                                               value={this.state.email} onChange={(e) => {
                                            this.setState({email: e.target.value})
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
                                    <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                    <Link to="/list" className="btn btn-danger"
                                          style={{marginLeft: "10px"}}>Cancel
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

export default UserUpdate;