import '../../App.css'
import React, {Component} from 'react'
import {Card, Table} from 'react-bootstrap';
import Header from "../Header";
import {Link} from "react-router-dom";
import ContextUser from "../ContextUser";
import Loading from "../Loading";
import CustomerService from "../service/CustomerService";

class ListCustomers extends Component {

    static contextType = ContextUser;

    constructor(props) {
        super(props)

        this.state = {
            customers: [],
            page:0,
            size:10,
            total:0

        }
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.getPageId=this.getPageId.bind(this);
    }
    getPageId=(i)=>{
        this.setState({page:i})
        console.log("page",this.state.page)

        const {username, password} = this.context;
        this.setState({loadingVisible: true})

        CustomerService.listAllCustomer(username,password,this.state.page,this.state.size).then((res) => {
            this.setState({
                customers: res.data.content,loadingVisible:false,
                total:res.data.totalElements
            });
            console.log("data :", res.data);
        })

    }

    deleteCustomer = (id) => {
        const {username, password} = this.context;
        CustomerService.deleteCustomer(id, username, password).then(res => {
            this.setState({customers: this.state.customers.filter(item=> item.id !== id), loadingVisible: false});
        });
    }

    detailCustomer = (id) => {
        this.props.history.push({
            pathname: `/detail-customer/${id}`,
            state: {
                id: id
            }
        })
    }

    updateCustomer = (id) => {

        this.props.history.push({
            pathname: `/update-customer/${id}`,
            state: {
                id: id
            }
        })
    }

    componentDidMount() {
        const {username, password} = this.context;
        this.setState({loadingVisible: true})
        this.getPageId();

        CustomerService.listAllCustomer(username,password,this.state.page,this.state.size)
            .then((res) => {
            this.setState({
                products: res.data.content,
                total:res.data.totalElements,
                loadingVisible:false
            });
        })
    }

    render() {

        const count=[];
        for(let i=0; i<= this.state.total/this.state.size; i++){
            count.push(
                <li  className="page-item" key={i} onClick={() => this.getPageId(i)}><a className="page-link" href="#">{i}</a></li>
            )
        }
        return (
            <div>
                <Header/>
                <br/>
                <Card className={"border border-dark bg-dark text-white"}>
                    <h2 className="text-center">Customer List</h2>
                    <Card.Body>
                        <Link to="/add-customer" className="btn btn-success">Add Customer</Link>
                        <Table bordered hover striped variant="dark">
                            <thead>
                            <tr>

                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
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

                                        <td>
                                            <button onClick={() => this.updateCustomer(customer.id)}
                                                    className="btn btn-success"> Edit
                                            </button>
                                            <button style={{marginLeft: "6px"}}
                                                    onClick={() => this.deleteCustomer(customer.id)}
                                                    className="btn btn-outline-info"> Delete
                                            </button>
                                            <button style={{marginLeft: "6px"}}
                                                    onClick={() => this.detailCustomer(customer.id)}
                                                    className="btn btn-warning">Detail
                                            </button>
                                        </td>

                                    </tr>
                                    </tbody>
                            )
                            }

                        </Table>
                        <nav aria-label="Page navigation example" style={{position:'absolute',right:'28rem', marginTop:'-12px'}}>
                            <ul className="pagination" >
                                <li className="page-item" >
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
