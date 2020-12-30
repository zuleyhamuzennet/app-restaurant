import React, {Component} from 'react';
import Header from "../Header";
import {Card, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import WaiterService from "../service/WaiterService";
import Loading from "../Loading";
import {AuthContext} from "../contexts/AuthContext";

class WaiterList extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);

        this.state = {
            waiters: []
        }
    }

    deleteWaiter = (id) => {
        const user = this.context;
        WaiterService.deleteWaiter(id, user.username, user.password).then(res => {
            this.setState({waiters: this.state.waiters.filter(waiter => waiter.id !== id)})
        });
    }

    updateWaiter = (id) => {
        this.props.history.push({
            pathname: `/update-waiter/${id}`,
            state: {
                id: id
            }
        })
    }

    detailWaiter = (waiter) => {
        this.props.history.push({
            pathname: `/detail-waiter/${waiter.id}`,
            state: {
                waiters: waiter
            }
        })
    }

    componentDidMount() {
        const user = this.context;
        this.setState({loadingVisible: true})
        WaiterService.listAllWaiter(user.username, user.password).then((res) => {
            this.setState({waiters: res.data, loadingVisible: false});
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Body>
                        <h2 className="text-center">Waiter List</h2>
                        <Link to="/waiter-add" className="btn btn-success">Add Waiter</Link>
                        <Table bordered hover striped variant="dark">
                            <thead>
                            <tr>
                                <th>Media</th>
                                <th>Waiter Name</th>
                                <th>Waiter Mail</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.waiters.map(
                                    waiter =>
                                        <tr key={waiter.id}>
                                            <td><img src={'data:image/png;base64,' + waiter.media.fileContent}
                                                     width="40" height="40" style={{margin: 3}}/>
                                            </td>
                                            <td>{waiter.waiterName}</td>
                                            <td>{waiter.waiterMail}</td>
                                            <td>{waiter.phone}</td>
                                            <td>{waiter.address}</td>
                                            <td>
                                                <button onClick={() => this.updateWaiter(waiter.id)}
                                                        className="btn btn-success"> Update
                                                </button>
                                                <button style={{marginLeft: "6px"}}
                                                        onClick={() => this.deleteWaiter(waiter.id)}
                                                        className="btn btn-outline-info"> Delete
                                                </button>
                                                <button onClick={() => this.detailWaiter(waiter)}
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
                    this.state.loadingVisible ?
                        <Loading/> : null
                }
            </div>
        );
    }
}

export default WaiterList;