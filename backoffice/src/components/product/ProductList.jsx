import '../../App.css'
import React, { Component } from 'react'
import ProductService from "./ProductService";
import {Card, Table} from 'react-bootstrap';

class ProductList extends Component {
    constructor(props){
        super(props)

        this.state = {
            products: []
        }
        this.editProduct=this.editProduct.bind(this);
        this.deleteProduct=this.deleteProduct.bind(this);
    }
    deleteProduct(id){
        ProductService.deleteProduct(id).then(res =>{
            this.setState({products: this.state.products.filter(products => products.id !== id)});
        });
    }

    editProduct(id) {
        this.props.history.push(`/update/${id}`);
    }

    componentDidMount() {
        ProductService.listAllProduct().then((res) => {
            this.setState({products: res.data});
        });
    }
    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <h2 className="text-center">Product List</h2>
                {/*<div className="row">
                    <button style={{marginBottom: "10px"}} className="btn btn-primary" onClick={this.addProduct}>Add Product</button>
                </div>*/}
                <Card.Body>
                    <Table bordered hover striped variant ="dark">
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.products.map(
                                products =>
                                    <tr key={products.id}>
                                        <td>{products.category}</td>
                                        <td>{products.productName}</td>
                                        <td>{products.description}</td>
                                        <td>{products.price}</td>
                                        <td>
                                            <button onClick={() => this.editProduct(products.id)}
                                                    className="btn btn-success"> Update
                                            </button>
                                            <button style={{marginLeft: "6px"}} onClick={() => this.deleteProduct(products.id)}
                                                    className="btn btn-outline-info"> Delete
                                            </button>
                                            <button style={{marginLeft: "6px"}} className="btn btn-warning" onClick={this.saveProduct}>Detail</button>
                                        </td>
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

export default ProductList;
