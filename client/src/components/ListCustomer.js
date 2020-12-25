import {Table} from "react-bootstrap";
import ContextUser from "./ContextUser";
import {useEffect, useContext, useState} from "react";
import {useHistory} from "react-router-dom";

import CustomerService from "./CustomerService";
import Header from "./Header";

const ListCustomer = (props) => {
    const {username, password} = useContext(ContextUser);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);
    const [total, setTotal] = useState(0);
    const history = useHistory();


    const [custumer, setCustumer] = useState([]);

    const getPageId = async (i) => {
        setPage(i);
        console.log("page", page);

        const res = await CustomerService.listAllCustomer(username, password, page, size);
        setCustumer(res.data.content);
        setTotal(res.data.totalElements);

        console.log("data :", res.data);

    }
    const editCustomer=(id)=>{

    }
    const deleteCustomer=(id)=>{
        CustomerService.deleteCustomer(id, username, password);
        //setCustumer(customer.filter(item=> item.id !== id));

    }

    useEffect(() => {
        getPageId();
    }, []);

    const selectCustomer = (id) => {
        history.push({
            pathname: "/products",
            state: {id: id}
        })

    }

    const count = [];
    for (let i = 0; i <= total / size; i++) {
        count.push(
            <li className="page-item" key={i} onClick={() => getPageId(i)}><a className="page-link" href="#">{i}</a>
            </li>
        )
    }


    return (
        <div>
            <Header/>
            <div className="container">
                <div className="col-sm-12 mt-2">

                    <dic className="card">

                        <div>
                            <h2 className="text-center card-body mt-2 ">Customer List</h2>
                            <button onClick={(e)=>history.push("/customers")} className="btn btn-success">Add Customer</button>
                            <Table bordered hover striped variant="dark">
                                <thead>
                                <tr>

                                    <th>Customer Name</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Actions</th>

                                </tr>
                                </thead>
                                <tbody>
                                {

                                    custumer.map(
                                        cust =>
                                            <tr key={cust.id}>
                                                <td>{cust.name}</td>
                                                <td>{cust.phone}</td>
                                                <td>{cust.address}</td>


                                                <td>
                                                    <button onClick={(e) => selectCustomer(cust.id)}
                                                            className="btn btn-success"> select
                                                    </button>
                                                    <button onClick={(e) => history.push("/main")} style={{marginLeft: "6px"}}

                                                            className="btn btn-outline-info"> Cancel
                                                    </button>

                                                </td>
                                            </tr>
                                    )
                                }
                                </tbody>
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
                        </div>
                    </dic>
                </div>

            </div>
        </div>
    );


}
export default ListCustomer;