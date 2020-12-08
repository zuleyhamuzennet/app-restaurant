import React, {Component} from 'react';
import Header from "../Header";
import {Card, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import WaiterService from "../service/WaiterService";

class WaiterList extends Component {
    constructor(props) {
        super(props);

        this.state={
            waiters :[]
        }

        this.deleteWaiter=this.deleteWaiter.bind(this);
    }
    deleteWaiter(id) {
        WaiterService.deleteWaiter(id).then();
        window.location.reload();
    }

    componentDidMount() {
        WaiterService.listAllWaiter().then((res) => {
            this.setState({waiters: res.data});
        });
    }

    render() {
        console.log(this.state.waiters);
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
                                <th>Waiter Name</th>
                                <th>Waiter Description</th>
                                <th>Actions</th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.waiters.map(
                                    waiter =>
                                        <tr key={waiter.waiterId}>
                                            <td>{waiter.waiterName}</td>
                                            <td></td>


                                            <td>
                                                <button onClick={() => this.updateWaiter(waiter.waiterId)}
                                                        className="btn btn-success"> Update
                                                </button>
                                                <button style={{marginLeft: "6px"}}
                                                        onClick={() => this.deleteWaiter(waiter.waiterId)}
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

            </div>
        );
    }
}

export default WaiterList;