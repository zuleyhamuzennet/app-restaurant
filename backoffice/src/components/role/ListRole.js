import React, {Component} from 'react';
import RoleService from "../service/RoleService";
import Header from "../Header";
import {Card, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import Loading from "../Loading";
import {AuthContext} from "../contexts/AuthContext";

class ListRole extends Component {
    static contextType=AuthContext;

    constructor(props) {
        super(props)
        this.state={
            roles:[]
        }
    }
    componentDidMount() {
        const user = this.context;
        RoleService.listAllRole(user.username,user.password).then((res)=>{
            this.setState({roles:res.data});
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Body>
                        <h2 className="text-center">Role List</h2>
                        <Link to="/add-role" className="btn btn-success">Add Role</Link>
                        <Table bordered hover striped variant="dark">
                            <thead>
                            <tr>
                                <th>Role Name</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.roles.map(
                                    role =>
                                        <tr key={role.id}>
                                            <td>{role.name}</td>
                                            <td>
                                                <button onClick={() => this.updateWaiter(role.id)}
                                                        className="btn btn-success"> Update
                                                </button>
                                                <button style={{marginLeft: "6px"}}
                                                        onClick={() => this.deleteWaiter(role.id)}
                                                        className="btn btn-outline-info"> Delete
                                                </button>
                                                <button st
                                                        className="btn btn-warning">Detail
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
                {
                    this.state.loadingVisible?
                        <Loading/>:null
                }
            </div>
        );
    }
}

export default ListRole;