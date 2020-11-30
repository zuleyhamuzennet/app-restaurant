import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (

                <header>

                        <div><a href="/" className="navbar-brand"><button className="btn btn-success" style={{position:'absolute',right:'50px'}}>Logout</button></a></div>
                </header>

        );
    }
}

export default Header;