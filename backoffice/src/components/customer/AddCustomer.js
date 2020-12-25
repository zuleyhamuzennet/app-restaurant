import React, {Component} from 'react';
import CategoryService from "../service/CategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";
import axios from "axios"
import Loading from "../Loading";
import ContextUser from "../ContextUser";
import MediaService from "../service/MediaService";
import CustomerService from "../service/CustomerService";


class AddCustomer extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            address: '',
            phone: ''

        }
        this.saveCustomer = this.saveCustomer.bind(this);
    }
    saveCustomer= (e) => {
        const {username,password}=this.context;
        e.preventDefault();
        let customer = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            phone:this.state.phone

        };
        console.log('customer=> ' + JSON.stringify(customer));
        CustomerService.addCustomer(customer,username,password).then(res => {
            this.props.history.push('/list-customers');
        });
    }
    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add Customer</h3>
                                <div className="card-body">
                                    <form>

                                        <div className="form-group">
                                            <label> Customer Name </label>
                                            <input placeholder="Product Name" name="name"
                                                   className="form-control"
                                                   value={this.state.name}
                                                   onChange={(e)=>{this.setState({name:e.target.value})}}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Address </label>
                                            <input placeholder="Address" name="address" className="form-control"
                                                   value={this.state.address}
                                                   onChange={(e)=>{this.setState({address:e.target.value})}}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Phone</label>
                                            <input placeholder="Address" name="phone" className="form-control"
                                                   value={this.state.phone}
                                                   onChange={(e)=>{this.setState({phone:e.target.value})}}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveCustomer}>Save</button>
                                        <Link to="/list-customers" className="btn btn-danger"
                                              style={{marginLeft: "10px"}}>Cancel
                                        </Link>
                                    </form>

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


export default AddCustomer;
