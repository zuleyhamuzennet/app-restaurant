import React, {Component} from 'react';
import Header from "../Header";
import {Link} from "react-router-dom";
import Loading from "../Loading";
import RoleService from "../service/RoleService";
import {AuthContext} from "../contexts/AuthContext";
import {Formik} from "formik"

class AddRole extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            formValues: {
                name: ""
            },
            formErrors: {
                name: ""
            },
            formValidity: {
                name: false
            },
            isSubmitting:false
        }
    }

    saveRole = (e) => {
        e.preventDefault();
        let roles = {
            id: this.state.id,
            name: this.state.name
        };
        const user = this.context;
        RoleService.addRole(roles, user.username, user.password).then(res => {
            this.props.history.push('/list-role');
        });
    }

    render() {
        const { formValues, formErrors, isSubmitting } = this.state;
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Role</h3>
                            <div className="card-body" key={this.state.id}>
                                <form>
                                    <div className="form-group">
                                        <label> Role Name </label>
                                        <input placeholder="Role Name" name="role" className={`form-control ${formErrors.name? "is-invalid":""}`}
                                               value={formValues.name}
                                               onChange={(e) => {
                                                   this.setState({name: e.target.value})
                                               }}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Media </label>
                                        <select className="selectpicker form-control">
                                        </select>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveRole}>Save</button>
                                    <Link to="/waiters" className="btn btn-danger"
                                          style={{marginLeft: "10px"}}>Cancel
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.loadingVisible ?
                        <Loading/> : null
                }
            </div>
        );
    }
}

export default AddRole;