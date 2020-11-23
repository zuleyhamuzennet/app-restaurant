import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="/list" className="navbar-brand">List Product</a></div>
                        <div><a href="/add" className="navbar-brand">Add Product</a></div>
                        <div><a href="/listuser" className="navbar-brand">List User</a></div>
                        <div><a href="/adduser" className="navbar-brand">Add User</a></div>
                        <div><a href="/sales" className="navbar-brand">Sales</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;