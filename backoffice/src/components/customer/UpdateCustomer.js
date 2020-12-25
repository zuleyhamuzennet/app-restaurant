import React, {Component} from 'react';
import TableCategoryService from "../service/TableCategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";
import ContextUser from "../ContextUser";
import CustomerService from "../service/CustomerService";

class UpdateCustomer extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props);

        this.state={
            id: this.props.history.location.state?.id,
            name: '',
            address: '',
            phone: ''
        }
    }
    componentDidMount() {
        const {username,password}=this.context;
        CustomerService.getCustomerById(this.state.id,username,password).then(res=>{
            this.setState({
                id:res.data.id,
                name:res.data.name,
                address:res.data.address,
                phone:res.data.phone
            });
        })
    }
    updateCustomer=(e)=>{
        const {username,password}=this.context;
        e.preventDefault();

        let customer={
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone

        }
        CustomerService.updateCustomer(customer,username,password).then(res=>{
            this.props.history.push("/list-customers");
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit CustomerAdd</h3>
                            <div className="card-body" key={this.state.id}>
                                <form>

                                    <div className="form-group">
                                        <label> CustomerAdd Name </label>
                                        <input placeholder="CustomerAdd Name" name="name" className="form-control"
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
                                        <label>Phone</label>
                                        <input placeholder="Phone" name="phone" className="form-control"
                                               value={this.state.phone} onChange={(e)=>{this.setState({phone:e.target.value})}}/>

                                    </div>

                                    <button className="btn btn-success" onClick={this.updateCustomer}>Save</button>
                                    <Link to="/list-customers" className="btn btn-danger"
                                          style={{marginLeft: "10px"}}>Cancel
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateCustomer;