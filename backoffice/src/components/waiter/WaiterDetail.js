import React, {Component} from 'react';
import Header from "../Header";
import Loading from "../Loading";
import {AuthContext} from "../contexts/AuthContext";

class WaiterDetail extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            waiters: this.props.history.location.state?.waiters,
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="col-sm-12 mt-2">

                        <div className="row">
                            <div className="card col-sm-6">
                                <div className="card-header"> Waiter Detail</div>
                                <div className="card-body">
                                    <h5 className="card-title">Waiter Name : {this.state.waiters.waiterName}</h5>
                                    <p className="card-text">Mail : {this.state.waiters.waiterMail}</p>
                                    <p className="card-text">Phone: {this.state.waiters.phone}</p>
                                    <p className="card-text">Address: {this.state.waiters.address}</p>
                                </div>
                            </div>
                            <div className="card col-sm-6">
                                <div className="container">
                                    <div className="col-sm-12 mt-2">
                                        <img src={'data:image/png;base64,' + this.state.waiters.media.fileContent}
                                             width="200" height="200" style={{margin: 3}}/>
                                    </div>
                                </div>
                            </div>
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

export default WaiterDetail;