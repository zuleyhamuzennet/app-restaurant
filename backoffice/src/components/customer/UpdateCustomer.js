import React, {Component} from 'react';
import Header from "../Header";
import {Link} from "react-router-dom";
import CustomerService from "../service/CustomerService";
import MediaService from "../service/MediaService";
import {AuthContext} from "../contexts/AuthContext";

class UpdateCustomer extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.history.location.state?.customers.id,
            name: this.props.history.location.state?.customers.name,
            address: this.props.history.location.state?.customers.address,
            phone: this.props.history.location.state?.customers.phone,
            mediaList: [],
            mediaId: '',
            media: {}
        }
    }
    componentDidMount() {
        const user = this.context;
        MediaService.listAllMedia(user.username,user.password).then((res) => {
            this.setState({mediaList: res.data})
        });
    }
    changeMediaHandler = (event) => {
        this.setState({mediaId:event.target.value});
        const valueMedia = this.state.mediaList.filter(item => item.id == this.state.mediaId)
        this.setState({media: valueMedia[0]})
    }

    updateCustomer = (e) => {
        const user = this.context;
        e.preventDefault();
        let customer = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            media:this.state.media
        }
        CustomerService.updateCustomer(customer, user.username, user.password).then(res => {
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
                                               onChange={(e) => {
                                                   this.setState({name: e.target.value})
                                               }}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Address </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                               value={this.state.address}
                                               onChange={(e) => {
                                                   this.setState({address: e.target.value})
                                               }}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input placeholder="Phone" name="phone" className="form-control"
                                               value={this.state.phone} onChange={(e) => {
                                            this.setState({phone: e.target.value})
                                        }}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Category </label>
                                        <select className="selectpicker form-control"
                                                onChange={this.changeMediaHandler}>{
                                            this.state.mediaList.map(
                                                media =>
                                                    <option key={media.id}
                                                            value={media.id}>{media.mediaName}</option>
                                            )
                                        }
                                        </select>
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