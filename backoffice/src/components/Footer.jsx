import React, {Component} from 'react';
import ContextUser from "./ContextUser";

class Footer extends Component {
    static contextType=ContextUser;
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