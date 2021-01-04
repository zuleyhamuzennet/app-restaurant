import '../../App.css'
import React, {Component} from 'react'
import {Card, Table} from 'react-bootstrap';
import Header from "../Header";
import {Link} from "react-router-dom";
import ReactToExcel from "react-html-table-to-excel";
import Loading from "../Loading";
import CustomerService from "../service/CustomerService";
import {AuthContext} from "../contexts/AuthContext";

class ListCustomers extends Component {
    static contextType = AuthContext

    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            page: 0,
            size: 10,
            total: 0
        }
    }

    getPageId = (i) => {
        this.setState({page: i})
        const user = this.context;
        this.setState({loadingVisible: true})

        CustomerService.listAllCustomer(user.username, user.password, this.state.page, this.state.size).then((res) => {
            this.setState({
                customers: res.data.content, loadingVisible: false,
                total: res.data.totalElements
            });
        })
    }

    deleteCustomer = (id) => {
        const user = this.context;
        CustomerService.deleteCustomer(id, user.username, user.password).then(res => {
            this.setState({customers: this.state.customers.filter(item => item.id !== id), loadingVisible: false});
        });
    }

    detailCustomer = (customer) => {
        this.props.history.push({
            pathname: `/detail-customer/${customer.id}`,
            state: {
                customers: customer
            }
        })
    }

    updateCustomer = (customer) => {
        this.props.history.push({
            pathname: `/update-customer/${customer.id}`,
            state: {
                customers: customer
            }
        })
    }

    componentDidMount() {
        const user = this.context;
        this.setState({loadingVisible: true})
        this.getPageId();
        CustomerService.listAllCustomer(user.username, user.password, this.state.page, this.state.size)
            .then((res) => {
                this.setState({
                    products: res.data.content,
                    total: res.data.totalElements,
                    loadingVisible: false
                });
            })
    }

    render() {
        const count = [];
        for (let i = 0; i <= this.state.total / this.state.size; i++) {
            count.push(
                <li className="page-item" key={i} onClick={() => this.getPageId(i)}><a className="page-link"
                                                                                       href="#">{i}</a></li>
            )
        }
        return (
            <div>
                <Header/>
                <br/>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Body>
                        <h2 className="text-center">Customer List</h2>
                        <Link to="/add-customer" className="btn btn-outline-success">Add Customer</Link>
                        <ReactToExcel style={{position: 'absolute', right: '5px', marginTop: '-18px'}}
                                      id="table-to-xls"
                                      className="btn"
                                      table="table-to-xls"
                                      filename="excelFile"
                                      sheet="sheet 1"
                                      buttonText="Download as XLS"
                                      className="btn btn-outline-primary"
                        />
                        <Table bordered hover striped variant="dark" id="table-to-xls">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Media</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            {this.state.customers.map(
                                customer =>
                                    <tbody key={customer.id}>
                                    <tr>
                                        <td>{customer.name}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.phone}</td>
                                        <td><img src={'data:image/png;base64,' + customer.media.fileContent} width="40"
                                                 style={{margin: 3}}/>
                                        </td>
                                        <td>
                                            <button onClick={() => this.updateCustomer(customer)}
                                                    className="btn btn-outline-success"> Edit
                                            </button>
                                            <button style={{marginLeft: "6px"}}
                                                    onClick={() => this.deleteCustomer(customer.id)}
                                                    className="btn btn-outline-info"> Delete
                                            </button>
                                            <button style={{marginLeft: "6px"}}
                                                    onClick={() => this.detailCustomer(customer)}
                                                    className="btn btn-outline-warning">Detail
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                            )
                            }
                        </Table>
                        <nav aria-label="Page navigation example"
                             style={{position: 'absolute', right: '28rem', marginTop: '-12px'}}>
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                {count}
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
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

export default ListCustomers;
