import React, {Component} from 'react';
import {AuthContext} from "./contexts/AuthContext";

class Footer extends Component {
    static contextType=AuthContext;
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">Züleyha Müzennet</span>

                </footer>
            </div>
        );
    }
}

export default Footer;