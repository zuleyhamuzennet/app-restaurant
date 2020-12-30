import React, {Component} from 'react';
import Header from "../Header";
import Loading from "../Loading";

class DetailCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: this.props.history.location.state?.customers,
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
                                <div className="card-header"> Customer Detail</div>
                                <div className="card-body">
                                    <h5 className="card-title">Customer Name : {this.state.customers.name}</h5>
                                    <p className="card-text">Address : {this.state.customers.address}</p>
                                    <p className="card-text">Phone : {this.state.customers.phone}</p>
                                </div>
                            </div>
                            <div className="card col-sm-5">
                                <div className="container">
                                    <div className="col-sm-12 mt-2">
                                        <img src={'data:image/png;base64,' + this.state.customers.media.fileContent}
                                             width="200" height="200" style={{margin: 3}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.loadingVisible?
                        <Loading/>:null
                }
            </div>
        );
    }
}

export default DetailCustomer;