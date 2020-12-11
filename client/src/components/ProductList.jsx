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
            productList: [],
            categories: [],
            waiterId: this.props.history.location.state?.selectWaiterId,
            tableCartId: this.props.history.location.state?.tableId,
            tableCategoryId: this.props.history.location.state?.id,
            cart: {
                cartId: 0,
                productId: 0,
                piece: 1,
                productName: '',
                price: 0,
                total: 0,
                tableCartId: '',
                tableCategoryId: '',

            },
            carts: [],
            totalCart: 0
        }
        this.listProductByCategory = this.listProductByCategory.bind(this);
        this.goTables = this.goTables.bind(this);

    }

    listProductByCategory(id) {

        Service.listProductsByCategoryId(id).then((res) => {
            console.log("id=>", id);
            this.setState({productList: res.data});
            console.log("ProductList", res.data);
        });
        this.render();
    }

    saleButton(Carts) {
        console.log(Carts);
        Service.saleButton(Carts).then(res => {
            window.location.reload();
        });
        if (localStorage.getItem(`${this.state.tableCategoryId}+${this.state.tableCartId}`) !== null) {
            localStorage.removeItem(`${this.state.tableCategoryId}+${this.state.tableCartId}`);
        }

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

    addLocalStroge() {
        localStorage.setItem(`${this.state.tableCategoryId}+${this.state.tableCartId}`, JSON.stringify(this.state.carts));
    }

    goTables() {
        this.addLocalStroge();
        this.props.history.push("/table-category");
    }

    getLocaleStroge() {
        if (localStorage.getItem(`${this.state.tableCategoryId}+${this.state.tableCartId}`) !== null) {
            let array = JSON.parse(localStorage.getItem(`${this.state.tableCategoryId}+${this.state.tableCartId}`));
            this.setState({carts: array});
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
                    total: products.price,
                    tableCartId: this.state.tableCartId,
                    tableCategoryId: this.state.tableCategoryId,
                    waiterId: this.state.waiterId

                }

            }, () => this.setState({carts: [...this.state.carts, this.state.cart]}))
            console.log(cart);
        }
    }

    componentDidMount() {

        this.getLocaleStroge();
        Service.listAllCategory().then((res) => {
            console.log(res.data);
            this.setState({categories: res.data});
        });

        this.render();

    }

    render() {

        return (
            <div style={{backgroundColor: "#f6ffff"}}>
                <header>
                    <nav className="navbar navbar-dark bg-dark" >
                        <button className="navbar-toggler" type="button" data-toggle="collapse" style={{ display: 'flex', marginLeft: "auto", marginRight:'20px'}}
                                aria-label="Toggle navigation"  onClick={() => this.goTables()}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </header>
                <br/>
                <div className="col-md-12 mx-auto" style={{padding: '10px 0'}}>
                    <div className="row">
                        <div className="col-md-2  ml-5">
                            <div className="list-group">
                                <h3>Selected Table :{JSON.parse(localStorage.getItem('tableId'))}</h3>

                                <a href="#" className="list-group-item list-group-item-action active"
                                   style={{backgroundColor: '#258d2f'}}>
                                    Categories
                                </a>
                                <table className="table table-hover" style={{border :"1px solid grey"}}>
                                    <tbody>

                                {
                                    this.state.categories.map(
                                        product =>

                                            <tr key={product.categoryId}>
                                                <td><img src={'data:image/png;base64,' + product.media.fileContent} width="40" style={{margin: 3}}/></td>
                                               <td
                                                   onClick={() => this.listProductByCategory(product.categoryId)}>
                                                    {product.categoryName}</td>


                                            </tr>

                                    )
                                }</tbody>
                                    </table>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="col-md-12">

                                <div className="my-custom-scrollbar my-custom-scrollbar-primary">
                                    <div className="force-overflow">
                                        <div className="row">
                                            {
                                                this.state.productList.map(
                                                    product =>
                                                        <div style={{marginBottom: "20px"}} className="col-md-6"
                                                             style={{postion: 'relative', padding: '9px 1px'}}
                                                             key={product.id}>
                                                            <div className="card text-center">
                                                                <div className="overflow">
                                                                    <img src="http://placehold.jp/300x150.png"
                                                                         className="card-img-top"></img>
                                                                </div>
                                                                <div className="mt-2 p-2 text-dark text-white" style={{
                                                                    position: 'absolute',
                                                                    width: '100%',
                                                                    backgroundColor: 'rgb(100,165,60)'
                                                                }}>
                                                                    <h5 className=" text-white">{product.productName}</h5>
                                                                    <p className=" text-white">{product.description} {product.price} ₺</p>
                                                                    <button className="btn btn-warning"
                                                                            onClick={() => this.addCarts(product)}>Add
                                                                        to
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

                                <table className="table table-striped table-hover" style={{maxWidth: '100%'}}>
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
