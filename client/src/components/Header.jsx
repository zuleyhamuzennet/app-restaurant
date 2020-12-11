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
                                aria-label="Toggle navigation"  onClick={() => this.goTables()}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </header>

        );
    }
}

export default Header;