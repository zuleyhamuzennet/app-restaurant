import '../../App.css'
import React, {Component} from 'react';
import ProductService from "../service/ProductService";
import CategoryService from "../service/CategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";

class UpdateProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            category: '',
            productName: '',
            description: '',
            price: ''
        }
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);

    }

    componentDidMount() {
        CategoryService.getCategoryById(this.state.id).then((res) => {
            let categories = res.data;
            this.setState({
                id: categories.categoryId,
                categoryName: categories.categoryName,
                catDescription: categories.catDescription,
            });
        });
    }

    updateProduct = (e) => {
        e.preventDefault();
        let product = {
            id: this.state.id,
            category: this.state.categoryName,
            productName: this.state.productName,
            description: this.state.description,
            price: this.state.price
        };
        console.log('Product => ' + JSON.stringify(product));
        ProductService.updateProduct(product, this.state.category).then(res => {
            this.props.history.push('/list')
        });

    }
    changeCategoryHandler = (event) => {
        this.setState({category: event.target.value})
    }
    changeIdHandler = (event) => {
        this.setState({id: event.target.value})
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

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Product</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Category </label>
                                        <select className="select picker form-control"
                                                onChange={this.changeCategoryHandler}>



                                                    <option key={this.state.id} value={this.state.category}
                                                            onChange={this.changeCategoryHandler}>
                                                        {
                                                            this.state.category}</option>

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
                                        <input placeholder="Product Price" name="price" className="form-control"
                                               value={this.state.price} onChange={this.changePriceHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateProduct}> Update</button>
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

export default UpdateProduct;