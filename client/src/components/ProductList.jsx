import React, {Component} from 'react';
import Service from "./Service";
import './card-style.css';
import nextId from "react-id-generator";
import Header from "./Header";
class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            products: [],
            cart: {
                cartId: 0,
                productId: 0,
                piece: 1,
                productName: '',
                price: 0,
                total: 0
            },
            carts: [],
            totalCart: 0
        }
        this.listProductByCategory = this.listProductByCategory.bind(this);
    }
    listProductByCategory(categories) {
        Service.listProductByCategory(categories).then((res) => {
            this.setState({products: res.data});
        });
        this.render();
    }
    saleButton(Carts) {
        Service.saleButton(Carts).then(res => {
            window.location.reload();
        });
    }
    increasePiece(cart) {
        cart.piece += 1;
        cart.total = cart.total + cart.price;
        this.state.totalCart += cart.price;
        this.setState([{...this.state.carts, [cart.cartId]: cart}])
        console.log(cart.piece)
    }
    decreasePiece(cart) {
        cart.piece -= 1;
        cart.total = cart.total - cart.price;
        this.state.totalCart -= cart.price;
        if (cart.piece == 0) {
            this.setState({carts: this.state.carts.filter(carts => carts.cartId !== cart.cartId)});
        } else {
            this.setState([{...this.state.carts, [cart.cartId]: cart}])
        }
    }
    addCarts(products) {
        this.state.totalCart += products.price;
        if (this.state.carts.filter(cart => cart.productId == products.id).length > 0) {
            var cart = this.state.carts.filter(cart => cart.productId == products.id)
            cart[0].piece += 1;
            cart[0].total = cart[0].total + cart[0].price;
            this.setState([{...this.state.carts, [cart[0].productId]: cart[0]}])
        } else {
            this.setState({
                cart: {
                    cartId: nextId(),
                    productId: products.id,
                    productName: products.productName,
                    price: products.price,
                    piece: 1,
                    total: products.price
                }
            }, () => this.setState({carts: [...this.state.carts, this.state.cart]}))
        }
    }
    componentDidMount() {
        Service.listAllCategory().then((res) => {
            this.setState({categories: res.data});
        });
    }
    render() {
        return (

            <div>
                <Header/>
                <div className="col-md-11 mx-auto">
                    <div className="row">
                        <div className="col-md-2 ">
                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action active">
                                    Categories
                                </a>
                                {
                                    this.state.categories.map(
                                        categories =>
                                            <tr key={categories}>
                                                <a href="#" className="list-group-item list-group-item-action"
                                                   onClick={() => this.listProductByCategory(categories)}>{categories}</a>
                                            </tr>
                                    )
                                }
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="col-md-12">
                                <div className="row">
                                    {
                                        this.state.products.map(
                                            products =>
                                                <div style={{marginBottom: "20px"}} className="col-md-6"
                                                     style={{postion: 'relative'}}>
                                                    <div className="card text-center">
                                                        <div className="overflow">
                                                            <img src="http://placehold.jp/300x150.png" alt="Image1"
                                                                 className="card-img-top"></img>
                                                        </div>
                                                        <div className="mt-2 p-2 text-dark text-white" style={{
                                                            position: 'absolute',
                                                            width: '100%',
                                                            backgroundColor: 'rgba(0,0,0,0.7)'
                                                        }}>
                                                            <h5 className=" text-white">{products.productName}</h5>
                                                            <p className=" text-white">{products.description} {products.price} ₺</p>
                                                            <button className="btn btn-warning"
                                                                    onClick={() => this.addCarts(products)}>Add to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <table className="table table-striped table-bordered" style={{maxWidth: '100%'}}>
                                <thead>
                                <tr>
                                    <th>Increase</th>
                                    <th>Piece</th>
                                    <th>Name</th>
                                    <th>T.Price</th>
                                    <th>Decrease</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.carts.map(
                                        cart =>
                                            <tr key={cart.cartId}>
                                                <td>
                                                    <button className="btn btn-success"
                                                            onClick={() => this.increasePiece(cart)}>+
                                                    </button>
                                                </td>
                                                <td>{cart.piece}</td>
                                                <td>{cart.productName}</td>
                                                <td>{cart.total} ₺</td>
                                                <td>
                                                    <button className="btn btn-danger"
                                                            onClick={() => this.decreasePiece(cart)}>-
                                                    </button>
                                                </td>
                                            </tr>
                                    )
                                }
                                </tbody>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Total</th>
                                    <th>{this.state.totalCart} ₺</th>
                                    <th>
                                        <button className="btn btn-outline-danger"
                                                onClick={() => this.saleButton(this.state.carts)}>Payment
                                        </button>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;
