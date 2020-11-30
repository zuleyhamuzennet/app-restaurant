import React, {Component} from 'react';
import PersonService from "../service/UserService";
import {Card, Table} from "react-bootstrap";
import Header from "../Header";
import {Link} from "react-router-dom";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
        this.deletePerson= this.deletePerson.bind(this);
    }

    componentDidMount() {
        PersonService.getPersons().then((res) => {
            this.setState({persons: res.data});
        });
    }

    deletePerson(id){
        PersonService.deletePerson(id).then(res =>{
            this.setState({person: this.state.persons.filter(person => person.id !== id)});
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
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.persons.map(

                                person =>
                                    <tr key={person.id}>
                                        <td>{person.username}</td>
                                        <td>{person.password}</td>

                                        <td>
                                            <Link to={`/updateUser/${person.id}`}
                                                    className="btn btn-success"> Update
                                            </Link>
                                            <button style={{marginLeft: "6px"}} onClick={() => this.deletePerson(person.id)}
                                                    className="btn btn-outline-info"> Delete
                                            </button>
                                            <button style={{marginLeft: "6px"}} className="btn btn-warning" onClick={this.saveUser}>Detail</button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </Card.Body>


            </Card>
            </div>
        );
    }
}

export default UserList;