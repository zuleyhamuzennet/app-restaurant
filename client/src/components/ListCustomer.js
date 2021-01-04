import {Table, Navbar, Form, Button, FormControl} from "react-bootstrap";
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
    const [searchValue, setSearchValue] = useState();
    const history = useHistory();
    const [custumer, setCustumer] = useState([]);

    const getPageId = async (i) => {
        setPage(i);
        const res = await CustomerService.listAllCustomer(username, password, page, size);
        if(!res){
            return(<h2>Customer List Not Found!</h2>)
        }
        setCustumer(res.data.content);
        setTotal(res.data.totalElements);
    }

    const GetByCustomerName = async (e) => {
        const res = await CustomerService.getCustomerByName(username, password, page, size, searchValue);
        setCustumer(res.data.content);
        setTotal(res.data.totalElements);
    }

    const changeHandler = (e) => {
        setSearchValue(e.target.value);
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

    function extracted() {
        const count = [];
        for (let i = 0; i <= total / size; i++) {
            count.push(
                <li className="page-item" key={i} onClick={() => getPageId(i)}><a className="page-link" href="#">{i}</a>
                </li>
            )
        }
        return count;
    }

    const count = extracted();

    function getCustomerMap() {
        return <tbody>
        {
            custumer.map(
                cust =>
                    <tr key={cust.id}>
                        <td><img src={'data:image/png;base64,' + cust.media.fileContent} width="50"
                                 style={{margin: 3}}/>
                        </td>
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
        </tbody>;
    }

    const customerListTable = () => {
        if (!custumer) {
            return alert("Customer List Not Found")
        }
        return (
            <Table bordered hover striped variant="dark">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Customer Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                </thead>
                {getCustomerMap()}
            </Table>)
    }

    function getNav() {
        return <nav aria-label="Page navigation example"
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
        </nav>;
    }

    function getNavbar() {
        return <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchValue}
                             onChange={(e) => changeHandler(e)}/>
                <Button className="btn-outline-primary" variant="outline-success"
                        onClick={(e) => GetByCustomerName(e)}>Search</Button>
            </Form>
        </Navbar>;
    }

    return (
        <div>
            <Header/>

            <div className="container">
                <div className="col-sm-12 mt-4">
                    <dic className="card">
                        {getNavbar()}
                        <div>
                            <h2 className="text-center card-body mt-2 ">Customer List</h2>
                            <button onClick={(e) => history.push("/customers")} className="btn btn-success">Add
                                Customer
                            </button>

                            {customerListTable()}

                            {getNav()}
                        </div>
                    </dic>
                </div>

            </div>
        </div>
    );

}
export default ListCustomer;