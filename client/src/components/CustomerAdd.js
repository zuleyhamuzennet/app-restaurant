import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';

import {useHistory} from "react-router-dom";
import CustomerService from "./CustomerService";
import ContextUser from "./ContextUser";
import Header from "./Header";

const CustomerAdd = (props) => {

    const {username, password} = useContext(ContextUser);
    const [customer, setCustomer] = useState({name: '', address: '', phone: ''});
    const {name, address, phone} = customer;
    const history = useHistory();


    const changeHandler = (e) => {
        setCustomer({...customer, [e.target.name]: e.target.value})
    }
    const saveCustomer = async (e) => {
        e.preventDefault();
        console.log(customer);

        const res = await CustomerService.addCustomer(customer, username, password);
        if(res.status===200){
            history.push("/list-customer");
        }


    }

    return (
        <div>
            <Header/>
            <br/>
            <div className="container">
                <div className="row">

                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Customed</h3>
                        <div className="card-body" key={name}>
                            <form>

                                <div className="form-group">
                                    <label> Customer Name </label>
                                    <input placeholder="Customer Name" name="name" className="form-control"
                                           value={name}
                                           onChange={(e) => changeHandler(e)}/>
                                </div>
                                <div className="form-group">
                                    <label> Address </label>
                                    <input placeholder="Waiter Name" name="address" className="form-control"
                                           value={address}
                                           onChange={(e) => changeHandler(e)}/>
                                </div>
                                <div className="form-group">
                                    <label> Phone Number </label>
                                    <input placeholder="Phone Number" name="phone" className="form-control"
                                           value={phone}
                                           onChange={(e) => changeHandler(e)}/>
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveCustomer(e)}>Save</button>
                                <button onClick={(e)=>history.push("/list-customer")} className="btn btn-danger"
                                        style={{marginLeft: "10px"}}>Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default CustomerAdd;