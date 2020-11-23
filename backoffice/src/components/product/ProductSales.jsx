import React, {Component} from 'react';
import {Card, Table} from "react-bootstrap";
import ProductService from "./ProductService";

class ProductSales extends Component {
    constructor(props){
        super(props)

        this.state = {
         /*   orderProduct: {
                cartId: 0,
                cartDate:'',
                productId: 0,
                piece: 1,
                productName: '',
                price: 0,
                total: 0
            },*/
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

                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.orderProducts.map(
                                products =>
                                    <tr key={products.cartId}>
                                        <td>{products.cartDate}</td>
                                        <td>{products.productName}</td>
                                        <td>{products.productId}</td>
                                        <td>{products.piece}</td>
                                        <td>{products.price}</td>
                                        <td>{products.total}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </Card.Body>


            </Card>
        );
    }
}

export default ProductSales;