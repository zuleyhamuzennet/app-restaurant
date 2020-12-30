import React, {Component} from 'react';
import Service from "./Service";
import './card-style.css';
import nextId from "react-id-generator";
import '../App.css';
import Loading from "./Loading";
import ContextUser from "./ContextUser";
import axios from "axios"

class ProductList extends Component {
    static contextType = ContextUser;

    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            categories: [],
            waiterId: this.props.history.location.state?.selectWaiterId,
            tableCartId: this.props.history.location.state?.tableId,
            tableCategoryId: this.props.history.location.state?.id,
            customerId: this.props.history.location.state?.id,
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
            scrollTop: 0,
            hasNext: '',
            page: 0,
            size: 10,
            carts: [],
            totalCart: 0,
            idC: ''
        }
        this.listProductByCategory = this.listProductByCategory.bind(this);
        this.goTables = this.goTables.bind(this);
        this.myRef = React.createRef();

    }

    onScroll = () => {
        const scrollTop = this.myRef.current.scrollTop
        this.setState({
            scrollTop: scrollTop
        });
        console.log("scrolltop", scrollTop);
        if (scrollTop > (this.state.page) * 803) {
            this.state.page = this.state.page + 1;
            this.setState({loadingVisible: true});
            const {username, password} = this.context;

            axios.get("http://localhost:8080/product/searchC/" + this.state.idC, {
                params: {
                    page: this.state.page,
                    size: this.state.size
                },
                auth: {
                    username: username,
                    password: password
                }
            }).then((res) => {
                this.setState({
                    hasNext: res.data.hasNext,
                    loadingVisible: false
                });
                console.log("data :", res.data);
                for (let i = 0; i < res.data.content.length; i++) {
                    this.state.productList.push(res.data.content[i])
                }
                this.setState({productList: this.state.productList});
            })
            console.log("productList", this.state.productList);
        }
    }

    listProductByCategory(categoryId) {
        this.setState({idC: categoryId})
        this.setState({loadingVisible: true});
        const {username, password} = this.context;

        axios.get("http://localhost:8080/product/searchC/" + categoryId, {
            params: {
                page: this.state.page,
                size: this.state.size
            },
            auth: {
                username: username,
                password: password
            }
        }).then((res) => {
            this.setState({
                productList: res.data.content,
                hasNext: res.data.hasNext,
                loadingVisible: false
            });
            console.log("data :", res.data);
        })
    }

    saleButton(Carts) {
        const {username, password} = this.context;
        Service.saleButton(Carts, username, password).then(res => {
            this.props.history.push("/table-category");

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
        this.props.history.push("/main");
    }

    getLocaleStroge() {
        if (localStorage.getItem(`${this.state.tableCategoryId}+${this.state.tableCartId}`) === null) {
            if (this.state.customerId!==null) {


            }
        }

        if (localStorage.getItem(`${this.state.tableCategoryId}+${this.state.tableCartId}`) !== null) {
            let array = JSON.parse(localStorage.getItem(`${this.state.tableCategoryId}+${this.state.tableCartId}`));
            this.setState({carts: array});
        }
    }

    addCarts(products) {
        this.setState({loadingVisible: true})

        this.state.totalCart += products.price;
        if (this.state.carts.filter(cart => cart.productId == products.id).length > 0) {
            var cart = this.state.carts.filter(cart => cart.productId == products.id)
            cart[0].piece += 1;
            cart[0].total = cart[0].total + cart[0].price;
            this.setState([{...this.state.carts, [cart[0].productId]: cart[0]}])
        } else {
            this.setState({
                loadingVisible: false,

                cart: {
                    cartId: nextId(),
                    productId: products.id,
                    productName: products.productName,
                    price: products.price,
                    piece: 1,
                    total: products.price,
                    tableCartId: this.state.tableCartId,
                    tableCategoryId: this.state.tableCategoryId,
                    waiterId: this.state.waiterId,
                    customerId: this.state.customerId
                }

            }, () => this.setState({carts: [...this.state.carts, this.state.cart]}))
            console.log(cart);
        }
    }

    async loadPage() {
        const {username, password} = this.context;
        await Service.listAllCategory(username, password).then((res) => {
            console.log(res.data);
            this.setState({categories: res.data});
        });
        this.listProductByCategory(this.state.categories[0].id);
    }

    componentDidMount() {
        this.loadPage();
        this.onScroll();

        this.getLocaleStroge();
    }

    render() {

        return (
            <div card>
                <header>
                    <nav className="navbar navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                style={{display: 'flex', marginLeft: "auto", marginRight: '20px'}}
                                aria-label="Toggle navigation" onClick={() => this.goTables()}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </header>
                <br/>

                <div className="col-md-12 mx-auto">
                    <div className="row">
                        <div className="col-md-2 mt-1 ml-4">
                            <div className="list-group">
                                <h3>Selected Table :{JSON.parse(localStorage.getItem('tableId'))}</h3>
                                <h3>Selected Customer :{JSON.parse(localStorage.getItem('customerId'))}</h3>

                                <a className="list-group-item list-group-item-action active"
                                   style={{backgroundColor: '#258d2f'}}>
                                    Categories
                                </a>
                                <table className="table table-hover" style={{border: "1px solid grey"}}>
                                    <tbody>

                                    {
                                        this.state.categories.map(
                                            product =>

                                                <tr key={product.id}>
                                                    <td><img
                                                        src={'data:image/png;base64,' + product.media.fileContent}
                                                        width="40" style={{margin: 3}}/></td>
                                                    <td
                                                        onClick={() => this.listProductByCategory(product.id)}>
                                                        {product.categoryName}</td>

                                                </tr>
                                        )
                                    }</tbody>
                                </table>
                            </div>
                        </div>
                        <div className=' col-md-6 mt-5'>
                            <div className="col-md-12">

                                <div className="my-custom-scrollbar my-custom-scrollbar-primary" ref={this.myRef}
                                     onScroll={this.onScroll}>
                                    <div className="force-overflow">
                                        <div className="row">
                                            {
                                                this.state.productList.map(
                                                    product =>
                                                        <div style={{marginBottom: "20px"}} className="col-md-5"

                                                             key={product.id}>
                                                            <div className="ui card" key={product.id}>
                                                                <div className="ui overflow">
                                                                    <img style={{height: "150px", width: "200px"}}
                                                                         className="card-img-top"
                                                                         src={'data:image/png;base64,' + product.media.fileContent}/>
                                                                </div>
                                                                <div className="content">
                                                                    <a className="header">{product.productName}</a>
                                                                    <div className="meta">
                                                                            <span
                                                                                className="date">{product.description}</span>
                                                                    </div>
                                                                    <a>
                                                                        <i className="users icon"></i>
                                                                        {product.price} ₺
                                                                    </a>
                                                                </div>
                                                                <div className="extra content">
                                                                    <div class="ui bottom attached button"
                                                                         onClick={() => this.addCarts(product)}>Add
                                                                        to
                                                                        Cart
                                                                    </div>
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
                            <div className=" col-md-3 mt-4 ">

                                <table className="table table-striped table-hover">
                                    <thead>
                                    <tr>
                                        <th>Increase</th>
                                        <th></th>
                                        <th>Name</th>
                                        <th>T.Price</th>
                                        <th></th>
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

                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 "></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-3">
                            <tr style={{position: "absolute", right: "10px"}}>
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

export default ProductList;
