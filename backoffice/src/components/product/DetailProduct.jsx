import React, {Component} from 'react';
import ProductService from "../service/ProductService";
import Header from "../Header";
import Loading from "../Loading";
import ContextUser from "../ContextUser";

class DetailProduct extends Component {
    static contextType=ContextUser;

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.history.location.state?.id,
            media: this.props.history.location.state?.media,
            products: [],

        }
    }

    componentDidMount() {
        const {username,password}=this.context;
        this.setState({loadingVisible:true})
        ProductService.getProductById(this.state.id,username,password)
            .then((response) => {
                this.setState({products: response.data,loadingVisible:false});
                console.log("pr", response.data);

            });
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
                                        <img src={'data:image/png;base64,' + this.state.media} width="200" height="200" style={{margin: 3}}/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {
                    this.state.loadingVisible?
                        <Loading/>:null
                }

            </div>
        );
    }
}

export default DetailProduct;