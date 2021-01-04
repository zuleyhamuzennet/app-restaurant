import React, {Component} from 'react';
import {Card, Table} from "react-bootstrap";
import ProductService from "../service/ProductService";
import Header from "../Header";
import '../../App.css';
import Loading from "../Loading";
import {AuthContext} from "../contexts/AuthContext";

class ProductSales extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props)
        this.state = {
            orderProducts: []
        }
    }

    componentDidMount() {
        const user = this.context;
        ProductService.getSales(user.username, user.password).then(response => {
            this.setState({
                orderProducts: response.data
            });
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <Card className={"border border-dark bg-dark text-white "}>
                    <h2 className="text-center">Product Sales Cart</h2>
                    <Card.Body className="sales-scrollbar">
                        <Table bordered hover striped variant="dark">
                            <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Order Date</th>
                                <th>Product Name</th>
                                <th>Product Id</th>
                                <th>Product Piece</th>
                                <th>Product Price</th>
                                <th>Total Price</th>
                                <th>Waiter</th>
                                <th>Customer</th>
                            </tr>
                            </thead>
                            {this.getProductSales()}
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

    getProductSales() {
        return <tbody>
        {
            this.state.orderProducts.map(
                products =>
                    <tr key={products.id}>
                        <td>{products.id}</td>
                        <td>{products.cartDate}</td>
                        <td>{products.productName}</td>
                        <td>{products.productId}</td>
                        <td>{products.piece}</td>
                        <td>{products.price}</td>
                        <td>{products.total}</td>
                        <td>{products.waiterId}</td>
                        <td>{products.customerId}</td>
                    </tr>
            )
        }
        </tbody>;
    }
}

export default ProductSales;