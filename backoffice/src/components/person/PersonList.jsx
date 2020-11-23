import React, {Component} from 'react';
import PersonService from "./PersonService";

class PersonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
        this.addPerson = this.addPerson.bind(this);
        this.updatePerson= this.updatePerson.bind(this);
        this.deletePerson= this.deletePerson.bind(this);
    }

    updatePerson(id){

        this.props.history.push(`/update/${id}`);

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

    addPerson() {
        this.props.history.push('/add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Person List</h2>
                <div className="row">
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addPerson}>Add Person</button>

                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Role</th>
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
                                        <td>{person.role}</td>
                                        <td>
                                            <button onClick={()=>this.updatePerson(person.id)}
                                                    className="btn btn-info">Update</button>
                                        </td>
                                        <td>
                                            <button onClick={()=>this.deletePerson(person.id)}
                                                    className="btn btn-danger">Delete</button>
                                        </td>

                                    </tr>
                            )
                        }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default PersonList;