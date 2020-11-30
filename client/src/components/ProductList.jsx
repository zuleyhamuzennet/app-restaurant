import React, {Component} from 'react';
import Service from "./Service";
import './card-style.css';
import nextId from "react-id-generator";
import Header from "./Header";
import '../App.css';


class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category: [],
            products: [],
            cart: {

                cartId: 0,
                productId: 0,
                piece: 1,
                productName: '',
                price: 0,
                total: 0,
                tableCartId:0
            },
            carts: [],
            totalCart: 0
        }
        this.listProductByCategory = this.listProductByCategory.bind(this);

    }

    listProductByCategory(id) {
        Service.listProductByCategory(id).then((res) => {


            this.setState({products: res.data.products});
            console.log(res.data);
        });
        this.render();
    }

    saleButton(Carts) {
        console.log(Carts);
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
                    total: products.totalCart,

                }
            }, () => this.setState({carts: [...this.state.carts, this.state.cart]}))
        }
    }


    componentDidMount() {
        Service.listAllCategory().then((res) => {
            console.log(res.data);
            this.setState({category: res.data});
        });
        this.render();
    }

    render() {
        return (

            <div>
                <Header/>
                <br/>
                <div className="col-md-11 mx-auto" style={{padding:'10px 0'}}>
                    <div className="row">
                        <div className="col-md-2 ">
                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action active" style={{backgroundColor:'#45bc9a'}}>
                                    Categories
                                </a>
                                {
                                    this.state.category.map(
                                        categories =>
                                            <tr key={categories.categoryId}>
                                                <a href="#" className="list-group-item list-group-item-action"
                                                   onClick={() => this.listProductByCategory(categories.categoryId)}>{categories.categoryName}</a>
                                            </tr>
                                    )
                                }
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="col-md-12">

                                <div className="my-custom-scrollbar my-custom-scrollbar-primary">
                                    <div className="force-overflow">
                                    <div className="row">


                                        {
                                            this.state.products.map(
                                                product =>
                                                    <div style={{marginBottom: "20px"}} className="col-md-6"
                                                         style={{postion: 'relative', padding: '9px 1px'}}>
                                                        <div className="card text-center">
                                                            <div className="overflow">
                                                                <img src="http://placehold.jp/300x150.png" alt="Image1"
                                                                     className="card-img-top"></img>
                                                            </div>
                                                            <div className="mt-2 p-2 text-dark text-white" style={{
                                                                position: 'absolute',
                                                                width: '100%',
                                                                backgroundColor: 'rgb(47,78,66)'
                                                            }}>
                                                                <h5 className=" text-white">{product.productName}</h5>
                                                                <p className=" text-white">{product.description} {product.price} ₺</p>
                                                                <button className="btn btn-warning"
                                                                        onClick={() => this.addCarts(product)}>Add to
                                                                    Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                            )
                                        }
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-scrollbar">
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
                                                <td>{cart.total} </td>
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
            </div>
        );
    }
}

export default ProductList;
