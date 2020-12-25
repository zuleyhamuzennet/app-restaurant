import React, {Component} from 'react';
import Header from "../Header";

import Loading from "../Loading";
import ContextUser from "../ContextUser";
import CustomerService from "../service/CustomerService";

class DetailCustomer extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.history.location.state?.id,
            customers: []

        }
    }

    componentDidMount() {

        this.setState({loadingVisible:true})
        const {username,password}=this.context;
        CustomerService.getCustomerById(this.state.id,username,password)
            .then((res)=>{
                this.setState({customers:res.data,loadingVisible:false});
            })
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
                            <div className="card col-sm-6">

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