import React, {Component} from 'react';
import Header from "../Header";
import Loading from "../Loading";

class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.history.location.state?.products
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="col-sm-12 mt-2">
                        <div className="row">
                            <div className="card col-sm-6">
                                <div className="card-header"> Product Detail</div>
                                <div className="card-body">
                                    <h5 className="card-title">Product : {this.state.products.productName}</h5>
                                    <p className="card-text">Description : {this.state.products.description}</p>
                                    <p className="card-text">Price : {this.state.products.price}</p>
                                </div>
                            </div>
                            <div className="card col-sm-6">
                                <div className="container">
                                    <div className="col-sm-12 mt-2">
                                        <img src={'data:image/png;base64,' + this.state.products.media.fileContent}
                                             width="200" height="200" style={{margin: 3}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.loadingVisible ?
                        <Loading/> : null
                }
            </div>
        );
    }
}

export default DetailProduct;