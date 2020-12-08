import React, {Component} from 'react';
import {Route} from "react-router-dom";


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (

                <header>
                    <nav className="navbar navbar-dark bg-dark" >
                        <button className="navbar-toggler" type="button" data-toggle="collapse" style={{ display: 'flex', marginLeft: "auto"}}
                                data-target="#navbarToggleExternalContent"
                                aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                    <div className="pos-f-t" >
                        <div className="collapse" id="navbarToggleExternalContent">
                            <div className="bg-dark p-4">
                                <ul className="navbar-nav mr-auto" >
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/main">Main Page <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/products">Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/table-category">Category</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </header>

        );
    }
}

export default Header;