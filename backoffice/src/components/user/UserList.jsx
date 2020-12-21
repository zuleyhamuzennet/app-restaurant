import React, {Component} from 'react';
import PersonService from "../service/UserService";
import {Card, Table} from "react-bootstrap";
import Header from "../Header";
import {Link} from "react-router-dom";
import Loading from "../Loading";
import UserService from "../service/UserService";
import ContextUser from "../ContextUser";

class UserList extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
        this.deletePerson= this.deletePerson.bind(this);
    }

    componentDidMount() {
        const {username,password}=this.context;
        console.log(this.context);
        PersonService.getPersons(username,password).then((res) => {
            this.setState({persons: res.data});
            console.log("users:",res.data);
        });

    }
    updateUser=(id)=>{
        console.log("user id:", id)
        this.props.history.push({
            pathname:`/updateUser/${id}`,
            state:{
                id:id
            }
        })

    }
    detailUser=(id)=>{
        this.props.history.push({
            pathname:`/user-detail/${id}`,
            state:{
                id:id
            }
        })
    }

    deletePerson=(id)=>{
        const {username,password}=this.context;

        this.setState({loadingVisible:true})
        UserService.deletePerson(id,username,password).then(res =>{
            this.setState({persons: this.state.persons.filter(pers => pers.id !== id),loadingVisible:false});
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
            <Card className={"border border-dark bg-dark text-white"}>
                <h2 className="text-center">User List</h2>
                <Card.Body>
                    <Link to="/adduser" className="btn btn-success">Add User</Link>
                    <Table bordered hover striped variant ="dark">
                        <thead>
                        <tr>
                            <th>Role</th>
                            <th>User Name</th>
                            <th>E-Mail</th>
                            <th>Password</th>
                            <th>Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.persons.map(

                                user=>

                                            <tr >
                                                <td><a href="#">
                                                    {user.roles.map(
                                                        role=>
                                                        role.name+" ")}
                                                </a>
                                                </td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.password}</td>



                                                <td>
                                                    <button onClick={()=>this.updateUser(user.id)}
                                                            className="btn btn-success"> Update
                                                    </button>
                                                    <button style={{marginLeft: "6px"}} onClick={() => this.deletePerson(user.id)}
                                                            className="btn btn-outline-info"> Delete
                                                    </button>
                                                    <button style={{marginLeft: "6px"}} className="btn btn-warning" onClick={() => this.detailUser(user.id)}>Detail</button>
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

export default UserList;