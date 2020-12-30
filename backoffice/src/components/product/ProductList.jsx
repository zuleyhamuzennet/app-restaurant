import '../../App.css'
import React, {Component, useState} from 'react'
import ProductService from "../service/ProductService";
import {Card, Table} from 'react-bootstrap';
import Header from "../Header";
import {Link} from "react-router-dom";
import Loading from "../Loading";
import axios from 'axios'
import {AuthContext} from "../contexts/AuthContext";

class ProductList extends Component {

    static contextType = AuthContext;
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            page:0,
            size:10,
            total:0

        }
    }
    getPageId=(i)=>{
        this.setState({page:i})
        const user = this.context;
        this.setState({loadingVisible: true})

        axios.get("http://localhost:8080/product/search",{
            params:{
                page: this.state.page,
                size:this.state.size
            },
            auth:{
                username:user.username,
                password:user.password
            }
        }).then((res) => {
            this.setState({
                products: res.data.content,loadingVisible:false,
                total:res.data.totalElements
            });
            console.log("data :", res.data);
        })

    }

    deleteProduct = (id) => {
        const user = this.context;
        ProductService.deleteProduct(id, user.username, user.password).then(res => {
            this.setState({products: this.state.products.filter(product => product.id !== id), loadingVisible: false});
        });
    }

    detailProduct = (product) => {
        this.props.history.push({
            pathname: `/detail/${product.id}`,
            state: {
                products:product
            }
        })
    }

    updateProduct = (id) => {
        this.props.history.push({
            pathname: `/update/${id}`,
            state: {
                id: id
            }
        })
    }

    fiterCategory = (categoryId) => {
        this.setState({loadingVisible: true})
        const array = this.state.products.filter(item => item.categoryName == categoryId)
        this.setState({products: array, loadingVisible: false})
        console.log(array);
        this.render();
    }

    componentDidMount() {
        const user = this.context;

        this.setState({loadingVisible: true})
        this.getPageId();

        axios.get("http://localhost:8080/product/search",{
            params:{
                page: this.state.page,
                size:this.state.size
            },
            auth:{
                username:user.username,
                password:user.password
            }
        }).then((res) => {
            this.setState({
                products: res.data.content,
                total:res.data.totalElements,
                loadingVisible:false
            });
            console.log("data :", res.data);
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
                                <th>Media</th>
                                <th>Actions</th>
                            </tr>
                            </thead>

                            {this.state.products.map(
                                product =>

                                    <tbody key={product.id}>

                                    <tr>
                                        <td>{
                                            product.categories.map(
                                                category =>
                                                    <a href="#" key={product.id}
                                                       onClick={

                                                           () => this.fiterCategory(category.id)}>{category.categoryName + ' ,'


                                                    }</a>
                                            )}
                                        </td>
                                        <td>{product.productName}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td><img src={'data:image/png;base64,' + product.media.fileContent} width="40"
                                                 style={{margin: 3}}/>
                                        </td>
                                        <td>
                                            <button onClick={() => this.updateProduct(product.id)}
                                                    className="btn btn-success"> Update
                                            </button>
                                            <button style={{marginLeft: "6px"}}
                                                    onClick={() => this.deleteProduct(product.id)}
                                                    className="btn btn-outline-info"> Delete
                                            </button>
                                            <button style={{marginLeft: "6px"}}
                                                    onClick={() => this.detailProduct(product)}
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


export default ProductList;
