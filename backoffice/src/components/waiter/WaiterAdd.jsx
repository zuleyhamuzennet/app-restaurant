import React, {Component} from 'react';
import {Link} from "react-router-dom";
import WaiterService from "../service/WaiterService";
import Header from "../Header";

class WaiterAdd extends Component {
    constructor(props) {
        super(props);
        this.state={
            waiterId:'',
            waiterName:''
        }
        this.changeWaiterNameHandler=this.changeWaiterNameHandler.bind(this);

    }
    saveWaiter=(e)=>{
        e.preventDefault();

        let waiters={
            id: this.state.id,
            waiterName: this.state.waiterName
        };
        console.log('waiters => ' + JSON.stringify(waiters));
        WaiterService.addWaiter(waiters).then(res=>{
            this.props.history.push('/waiters');
        });

    }

    changeWaiterNameHandler=(event)=>{
        this.setState({waiterName: event.target.value})
    }

    render() {
        return (
            <div >
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">

                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Waiter</h3>
                            <div className="card-body" key={this.state.id}>
                                <form>

                                    <div className="form-group">
                                        <label> Waiter Name </label>
                                        <input placeholder="Waiter Name" name="waiter" className="form-control"
                                               value={this.state.waiterName}
                                               onChange={this.changeWaiterNameHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveWaiter}>Save</button>
                                    <Link to="/waiters" className="btn btn-danger"
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

export default WaiterAdd;