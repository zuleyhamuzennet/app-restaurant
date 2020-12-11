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
            categories: [],
            multiSelect:[]

        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.changeMultiSelect=this.changeMultiSelect.bind(this);

    }

    saveProduct = (e) => {
        e.preventDefault();
        let products = {
            productName: this.state.productName,
            description: this.state.description,
            price: this.state.price,
            categoryListId:this.state.multiSelect
        };
        console.log('products => ' + JSON.stringify(products));

        ProductService.addProduct(products, this.state.multiSelect).then(res => {
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

    changeMultiSelect(id){
        if(this.state.multiSelect.includes(id)!==true){
            this.state.multiSelect.push(id);
            console.log("multiselect=> ekle",this.state.multiSelect)
        }else{
            for(let i = 0; i<this.state.multiSelect.length;i++){
                if(id === this.state.multiSelect[i]){
                    this.state.multiSelect.splice(i,1);
                    console.log("multiselect= sil",this.state.multiSelect)
                }
            }
    }}

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


                                            <div className="checkbox" style={{height:"4rem",overflow:"auto"}}>
                                                {
                                                    this.state.categories.map(
                                                        category=>
                                                            <div className="row col-md -12">
                                                                <label><input type="checkbox" value="" onClick={()=>this.changeMultiSelect(category.categoryId)}/>{category.categoryName}</label>
                                                            </div>
                                                    )
                                                }
                                            </div>

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
