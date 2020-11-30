import '../../App.css'
import React, {Component} from 'react'
import ProductService from "../service/ProductService";
import {Card, Table} from 'react-bootstrap';
import CategoryService from "../service/CategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id) {
        ProductService.deleteProduct(id).then(res => {
            this.setState({products: this.state.products.filter(products => products.id !== id)});
        });
    }

    componentDidMount() {
        CategoryService.listAllCategories().then((response) => {
            this.setState({categories: response.data});
        });
    }

    fiterCategory = (categoryName) => {
        const array = this.state.categories.filter(item => item.categoryName == categoryName)
        this.setState({categories: array})
        console.log(array);
        this.render();
    }


    render() {
        return (
            <div>
                <Header/>
                <br/>
                <Card className={"border border-dark bg-dark text-white"}>
                    <h2 className="text-center">Product List</h2>
                    <Card.Body>
                        <Link to="/add" className="btn btn-success">Add Product</Link>
                        <Table bordered hover striped variant="dark">
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                            </thead>

                            {this.state.categories.map(
                                category =>
                                    <tbody key={category.categoryId}>

                                    {
                                        category.products.map(
                                            product =>
                                                <tr key={product.id}>
                                                    <td>
                                                        <label
                                                            onClick={() => this.fiterCategory(category.categoryName)}>{category.categoryName}</label>
                                                    </td>
                                                    <td>{product.productName}</td>
                                                    <td>{product.description}</td>
                                                    <td>{product.price}</td>
                                                    <td>
                                                        <Link to={`/update/${product.id}`}
                                                              className="btn btn-success"> Update
                                                        </Link>
                                                        <button style={{marginLeft: "6px"}}
                                                                onClick={() => this.deleteProduct(product.id)}
                                                                className="btn btn-outline-info"> Delete
                                                        </button>
                                                        <Link to={`detail/${product.id}`} style={{marginLeft: "6px"}}
                                                              className="btn btn-warning">Detail
                                                        </Link>
                                                    </td>

                                                </tr>
                                        )
                                    }
                                    </tbody>
                            )
                            }
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProductList;
