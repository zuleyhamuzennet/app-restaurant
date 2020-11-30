import React, {Component} from 'react';
import ProductService from "../service/ProductService";
import {Card, Table} from 'react-bootstrap';
import Header from "../Header";

class DetailProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            products: [],
            category:''
        }
    }

    componentDidMount() {
        ProductService.getProductById(this.state.id)
            .then((response) => {
                this.setState({products: response.data});
                console.log("pr", response.data);

            });
        ProductService.getCategoryById(this.state.id)
            .then((res)=>{
                this.setState({category:res.data})
            })
        this.render();

    }

    render() {
        const products = this.state;

        return (
            <div>
                <Header/>
                <br/>

            <div className="container" >

                <div className="card w-75" style={{border:"2px solid"}}>
                    <div className="card-body">
                        <h5 className="card-title">Product : {this.state.products.productName}</h5>
                        <p className="card-text">Category : {this.state.category.categoryName}</p>
                        <p className="card-text">Description : {this.state.products.description}</p>
                        <p className="card-title">Price : {this.state.products.price}₺</p>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}

export default DetailProduct;