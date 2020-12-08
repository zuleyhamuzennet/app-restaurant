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
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{marginTop:"20px"}}>
                        <div><h2 className="navbar-brand">Back-Office:</h2></div>
                        <div><a href="/list" className="navbar-brand">Products</a></div>
                        <div><a href="/listuser" className="navbar-brand">Users</a></div>
                        <div><a href="/waiters" className="navbar-brand">Waiters</a></div>
                        <div><a href="/list-category" className="navbar-brand">Categories</a></div>
                        <div><a href="/table-categories" className="navbar-brand">Tables</a></div>
                        <div><a href="/sales" className="navbar-brand">Sales</a></div>
                        <div><a href="/info" className="navbar-brand">Info</a></div>
                        <div><a href="/" className="navbar-brand"><button className="btn btn-danger" style={{position:'absolute',right:'5px' ,marginTop:'-18px'}}>Logout</button></a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;