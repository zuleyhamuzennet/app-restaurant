import React, {Component} from 'react';
import ServiceInfo from './service/ServiceInfo';
import Header from "./Header";
import {AuthContext} from "./contexts/AuthContext";
import "../App.css"
import {Modal} from "react-bootstrap";

class Info extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            info: [],
            beanList: [],
            showModal: false
        }
    }

    componentDidMount() {
        const user = this.context;
        ServiceInfo.infoProperties(user.username, user.password).then((res) => {
            this.setState({info: res.data})
        });
        ServiceInfo.getBeans(user.username, user.password).then((res) => {
            this.setState({beanList: res.data})
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <h2 className="text-center"> Application Properties</h2>
                <button className="btn btn-warning" onClick={
                    () => this.setState({showModal: true})
                }>Beans
                </button>
                <div className="row">
                    <div className="col-md-12 ml-4 mr-sm-2">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Key</th>
                                <th>Value</th>
                            </tr>
                            </thead>
                            {this.getInfo()}
                        </table>
                        <br/>
                    </div>
                    {this.getModal()}
                </div>

            </div>

        );
    }

    getInfo() {
        return <tbody>
        {
            this.state.info.map(
                info =>
                    <tr key={info.key}>
                        <td>{info.value}</td>
                        <td>{info.key}</td>
                    </tr>
            )
        }
        </tbody>;
    }

    getModal() {
        return <Modal show={this.state.showModal} size='lg'>
            <Modal.Header>
                <h2>Beans</h2>
            </Modal.Header>
            <Modal.Body className="modal-body">

                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.beanList.map(
                            (bean, index) =>
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{bean}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>

            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" onClick={
                    () => this.setState({showModal: false})
                }>Cancel
                </button>
            </Modal.Footer>
        </Modal>;
    }
}

export default Info;