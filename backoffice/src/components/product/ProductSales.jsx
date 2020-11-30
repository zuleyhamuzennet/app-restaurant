import React, {Component} from 'react';
import {Card, Table} from "react-bootstrap";
import ProductService from "../service/ProductService";
import Header from "../Header";

class ProductSales extends Component {
    constructor(props){
        super(props)

        this.state = {
            orderProducts :[]
        }
    }
    componentDidMount() {
        ProductService.getSales().then(response=>{
            this.setState({
                orderProducts: response.data
            });
            console.log("order-product", response.data);
            this.render();
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
            <Card className={"border border-dark bg-dark text-white"}>
                <h2 className="text-center">Product Sales Cart</h2>
                <Card.Body>
                    <Table bordered hover striped variant ="dark">
                        <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Order Date</th>
                            <th>Product Name</th>
                            <th>Product Id</th>
                            <th>Product Piece</th>
                            <th>Product Price</th>
                            <th>Total Price</th>
                            <th>Table</th>

                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.orderProducts.map(
                                products =>
                                    <tr key={products.id}>
                                        <td>{products.cartDate}</td>
                                        <td>{products.productName}</td>
                                        <td>{products.productId}</td>
                                        <td>{products.piece}</td>
                                        <td>{products.price}</td>
                                        <td>{products.total}</td>
                                        <td>{products.tableId}</td>
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

export default ProductSales;