import '../../App.css'
import React, {Component} from 'react'
import ProductService from "../service/ProductService";
import {Card, Table} from 'react-bootstrap';
import Header from "../Header";
import {Link} from "react-router-dom";
import ContextUser from "../ContextUser";
import Loading from "../Loading";

class ProductList extends Component {

    static contextType=ContextUser;

    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
        this.deleteProduct = this.deleteProduct.bind(this);
        this.getFiles=this.getFiles.bind(this);
    }

    deleteProduct=(id)=> {
        const {username,password}=this.context;
        console.log("contex",this.context);
        console.log("silId=>",id);
        ProductService.deleteProduct(id,username,password).then(res =>{
            this.setState({products: this.state.products.filter(product => product.id !== id),loadingVisible:false});
        });
    }

    detailProduct=(id,media)=>{
        this.props.history.push({
            pathname:`/detail/${id}`,
            state:{
                id:id,
                media:media
            }
        })
    }
    getFiles = () => {
        if (!this.state.mediaList) {
            return null;
        }

        let list = [];
        this.state.mediaList.map(media =>
            list.push(
                <label><img  src={'data:image/png;base64,' + media.fileContent} width="150" style={{margin: 3}}/>{media.mediaName}</label>
            )
        );
        return (
            <ul>
                {list}
            </ul>
        );
    }

    updateProduct=(id)=>{

        this.props.history.push({
            pathname:`/update/${id}`,
            state:{
                id:id
            }
        })
    }

    componentDidMount() {
        const {username,password}=this.context;
        this.setState({loadingVisible: true})
        ProductService.listAllProduct(username,password).then((response) => {
            this.setState({products: response.data,loadingVisible:false});
            console.log("products =>",response.data);
        });
    }

    fiterCategory = (categoryId) => {
        this.setState({loadingVisible: true})
        const array = this.state.products.categories.filter(item => item.categoryId == categoryId)
        this.setState({categories: array,loadingVisible:false})
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
                                                        category=>
                                                    <a key={product.id}
                                                        onClick={

                                                            () => this.fiterCategory(category.categoryId)}>{category.categoryName + ' ,'


                                                         }</a>
                                                    )}
                                                </td>
                                                <td>{product.productName}</td>
                                                <td>{product.description}</td>
                                                <td>{product.price}</td>
                                                <td><img src={'data:image/png;base64,' + product.media.fileContent} width="40" style={{margin: 3}}/>
                                                </td>
                                                <td>
                                                    <button onClick={()=>this.updateProduct(product.id)}
                                                            className="btn btn-success"> Update
                                                    </button>
                                                    <button style={{marginLeft: "6px"}}
                                                            onClick={() => this.deleteProduct(product.id)}
                                                            className="btn btn-outline-info"> Delete
                                                    </button>
                                                    <button style={{marginLeft: "6px"}} onClick={() => this.detailProduct(product.id,product.media.fileContent)}
                                                          className="btn btn-warning">Detail
                                                    </button>
                                                </td>

                                            </tr>
                                            </tbody>
                            )
                            }
                        </Table>
                    </Card.Body>
                </Card>
                {
                    this.state.loadingVisible?
                        <Loading/>:null
                }
            </div>
        );
    }
}

export default ProductList;
