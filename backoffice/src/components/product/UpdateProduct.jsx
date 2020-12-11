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
            id: this.props.history.location.state?.id,
            categoryId:this.props.history.location.state?.categoryId,
            productName: '',
            description: '',
            price: '',
            category:'' ,
            products:[]
        }
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);


    }

    componentDidMount() {
        ProductService.getProductById(this.state.id).then((res) => {

            this.setState({
                id: res.data.id,
                productName: res.data.productName,
                description: res.data.description,
                price:res.data.price,
                category:res.data.category

            });
        });
        CategoryService.listAllCategories().then((res)=>{
            this.setState({products:res.data})
        });
    }

    updateProduct = (e) => {

        let product = {
            id:this.state.id,
            productName: this.state.productName,
            description: this.state.description,
            category:this.state.products.category ,
            price: this.state.price,

        };
        console.log('Product => ' + JSON.stringify(product));
        ProductService.updateProduct(product, this.state.id).then(res => {
            this.props.history.push('/list')
        });

        e.preventDefault();
    }
    changeCategoryHandler = (event) => {
        this.setState({categoryName: event.target.value})
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
                                       <select className="selectpicker form-control" onChange={this.changeCategoryHandler}>{

                                            this.state.products.map(product =>
                                                <option key={product.categoryId} value={product.categoryId}
                                                >{product.categoryName}</option>
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