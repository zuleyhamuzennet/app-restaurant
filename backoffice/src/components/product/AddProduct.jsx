import React, {Component} from 'react';
import ProductService from "../service/ProductService";
import CategoryService from "../service/CategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";

class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productName: '',
            description: '',
            price: '',
            categories: []
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }
    saveProduct = (e) => {
        e.preventDefault();
        let products = {
            productName: this.state.productName,
            description: this.state.description,
            price: this.state.price
        };
        console.log('products => ' + JSON.stringify(products,this.state.category));

        ProductService.addProduct(products,this.state.category).then(res => {
            this.props.history.push('/list');
        });

    }
    changeCategoryHandler = (event) => {

        this.setState({category: event.target.value})
    }
    changeProductNameHandler = (event) => {
        this.setState({productName: event.target.value})
    }
    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value})
    }
    changePriceHandler = (event) => {
        this.setState({price: event.target.value})
    }

    componentDidMount() {
        CategoryService.listAllCategories().then((res) => {
            this.setState({categories: res.data});
        });
    }
    render() {
        console.log(this.state.categories);
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Product</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Category </label>

                                        <select className="selectpicker form-control" onChange={this.changeCategoryHandler}>{


                                            this.state.categories.map(category =>
                                                <option key={category.categoryId} value={category.categoryId}
                                                        >{category.categoryName}</option>
                                            )
                                        }
                                        </select>

                                    </div>
                                    <div className="form-group">
                                        <label> Product Name </label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                               value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Price </label>
                                        <input placeholder="Price" name="price" className="form-control"
                                               value={this.state.price} onChange={this.changePriceHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
                                    <Link to="/list" className="btn btn-danger"
                                            style={{marginLeft: "10px"}}>Cancel
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AddProduct;
