import React, {Component} from 'react';
import Service from "./Service";
import '../App.css';
import Loading from "./Loading";
import ContextUser from "./ContextUser";
import {Modal} from "react-bootstrap";
import Cards from 'react-credit-cards';

class ProductList extends Component {
    static contextType = ContextUser;

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            productList: [],
            categories: [],
            waiterId: this.props.history.location.state?.waiterId,
            tableCartId: this.props.history.location.state?.tableId,
            tableCategoryId: this.props.history.location.state?.id,
            customerId: this.props.history.location.state?.id,
            cart: {
                cartId: 0,
                productId: '',
                price: '',
                piece: '',
            },
            scrollTop: 0,
            hasNext: '',
            page: 0,
            size: 10,
            carts: [],
            totalCart: 0,
            idC: '',
            paymentType: '',
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
        }
        this.myRef = React.createRef();
    }

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    saleButton() {
        this.addLocalStroge();
        const {username, password} = this.context;
        let order = {
            orderItemDTOList: this.state.carts,
            waiterId: this.state.waiterId,
            customerId: this.state.customerId,
            paymentType: this.state.paymentType,
            cvc: this.state.cvc,
            total: this.state.totalCart

        }
        Service.saleButton(order, username, password).then(res => {
            this.props.history.push("/main");
        });
        localStorage.removeItem(`${this.state.tableCategoryId}+${this.state.tableCartId}`)
    }

    addCarts(products) {
        this.state.totalCart += products.price;
        if (this.state.carts.filter(cart => cart.productId == products.id).length > 0) {
            let cart = this.state.carts.filter(cart => cart.productId == products.id)
            cart[0].piece += 1;
            cart[0].total = cart[0].total + cart[0].price;
            this.setState([{...this.state.carts, [cart[0].productId]: cart[0]}])

        } else {
            this.setState({
                cart: {
                    productId: products.id,
                    price: products.price,
                    piece: 1,
                },
            }, () => this.setState({carts: [...this.state.carts, this.state.cart]}))
        }
    }

    onScroll = () => {
        const scrollTop = this.myRef.current.scrollTop
        this.setState({
            scrollTop: scrollTop
        });
        if (scrollTop > (this.state.page) * 803) {
            this.state.page = this.state.page + 1;
            this.setState({loadingVisible: true});
            const {username, password} = this.context;

            Service.getScrollProductList(this.state.idC, username, password, this.state.page, this.state.size).then((res) => {
                this.setState({
                    hasNext: res.data.hasNext,
                    loadingVisible: false
                });
                for (let i = 0; i < res.data.content.length; i++) {
                    this.state.productList.push(res.data.content[i])
                }
                this.setState({productList: this.state.productList});
            })
        }
    }

    listProductByCategory = (id) => {
        this.setState({idC: id})
        this.setState({loadingVisible: true});
        const {username, password} = this.context;

        Service.getScrollProductList(this.state.idC, username, password, this.state.page, this.state.size).then((res) => {
            this.setState({
                productList: res.data.content,
                hasNext: res.data.hasNext,
                loadingVisible: false
            });
        })
    }

    increasePiece(cart) {
        cart.piece += 1;
        cart.total = cart.total + cart.price;
        this.state.totalCart += cart.price;
        this.setState([{...this.state.carts, [cart.cartId]: cart}])
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

    goTables = () => {
        this.addLocalStroge();
        this.props.history.push("/main");
    }

    getLocaleStroge() {
        if (localStorage.getItem(`${this.state.tableCategoryId}+${this.state.tableCartId}`) !== null) {
            let array = JSON.parse(localStorage.getItem(`${this.state.tableCategoryId}+${this.state.tableCartId}`));
            this.setState({carts: array});
        }
    }

    async loadPage() {
        const {username, password} = this.context;
        await Service.listAllCategory(username, password).then((res) => {
            this.setState({categories: res.data});
        });
        this.listProductByCategory(this.state.categories[0].id);
    }

    componentDidMount() {
        this.loadPage();
        this.onScroll();
        this.getLocaleStroge();
        console.log("pro",this.state.productList)
    }

    render() {
        return (
            <>
                {this.getHeader()}
                <div className="col-md-12 mx-auto">
                    <div className="row">
                        <div className="col-md-2 mt-5 ml-4">
                            <div className="list-group">
                                <a className="list-group-item list-group-item-action active"
                                   style={{backgroundColor: '#258d2f'}}>
                                    Categories
                                </a>
                                {this.getCategoriesMap()}
                                <h4>Selected Table :{JSON.parse(localStorage.getItem('tableId'))}</h4>
                                <h4>Selected Customer :{JSON.parse(localStorage.getItem('customerId'))}</h4>
                            </div>
                        </div>
                        <div className=' col-md-6 mt-5 ml-2'>
                            <div className="col-md-12">
                                <div className="my-custom-scrollbar my-custom-scrollbar-primary" ref={this.myRef}
                                     onScroll={this.onScroll}>
                                    <div className="force-overflow">
                                        {this.getProductListMap()}
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
                                    {this.getCartMap()}
                                </table>
                            </div>
                        </div>
                    </div>
                    {this.getSaleButton()}
                </div>
                {
                    this.state.loadingVisible ?
                        <Loading/> : null
                }
                {this.getModal1()}
            </>
        );
    }

    getHeader() {
        return <header>
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        style={{display: 'flex', marginLeft: "auto", marginRight: '20px'}}
                        aria-label="Toggle navigation" onClick={() => this.goTables()}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </header>;
    }

    getModal1() {
        return <Modal show={this.state.showModal}>
            <Modal.Header>
                <Modal.Title>Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div id="PaymentForm" >
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                    <form>
                        <div className="form-group">
                        <input
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            className="form-control"
                        />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                   name="name"
                                   placeholder="Name"
                                   className="form-control"
                                   onChange={this.handleInputChange}
                                   onFocus={this.handleInputFocus}/>
                        </div>
                        <div className="form-group">
                            <input type="tel"
                                   name="expiry"
                                   placeholder="Valid Thru"
                                   className="form-control"
                                   onChange={this.handleInputChange}
                                   onFocus={this.handleInputFocus}/>
                            <input type="tel"
                                   name="cvc"
                                   placeholder="CVC"
                                   onChange={this.handleInputChange}
                                   onFocus={this.handleInputFocus}
                                   className="form-control"/>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline-warning"
                        onClick={
                            () => this.setState({showModal: false})}
                >Cancel
                </button>
                <button className="btn btn-outline-success"
                    onClick={() => this.saleButton()}
                >Save Changes
                </button>
            </Modal.Footer>
        </Modal>;
    }

    getSaleButton() {
        return <div className="row">
            <div className="col-md-2 "></div>
            <div className="col-md-6"></div>
            <div className="col-md-3">
                <tr style={{position: "absolute", right: "10px"}}>
                    <th></th>
                    <th></th>
                    <th>Total</th>
                    <th>{this.state.totalCart} ₺</th>
                    <th>
                        <button className="btn btn-warning"
                                onClick={
                                    () => this.setState({showModal: true})}
                        >Payment
                        </button>
                    </th>
                </tr>
            </div>
        </div>;
    }

    getCategoriesMap() {
        return <table className="table table-hover" style={{border: "1px solid grey"}}>
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
        </table>;
    }

    getCartMap() {
        return <tbody>
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
        </tbody>;
    }

    getProductListMap() {
        return <div className="row">
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
                                    <div className="ui bottom attached button"
                                         onClick={() => this.addCarts(product)}>Add
                                        to
                                        Cart
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
        </div>;
    }

}

export default ProductList;
