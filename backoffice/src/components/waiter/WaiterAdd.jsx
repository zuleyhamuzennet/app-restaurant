import React, {Component} from 'react';
import {Link} from "react-router-dom";
import WaiterService from "../service/WaiterService";
import Header from "../Header";
import axios from "axios";
import Loading from "../Loading";
import ContextUser from "../ContextUser";

class WaiterAdd extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props);
        this.state={
            waiterId:'',
            waiterName:'',
            waiterMail:'',
            address:'',
            phone:'',
            mediaList: [],
            mediaId:'',
            media:{}
        }
        this.changeMediaHandler=this.changeMediaHandler.bind(this);
        this.getFiles=this.getFiles.bind(this);

    }

    saveWaiter=(e)=>{

        console.log(this.state.media);
        if(this.state.media===''){
            console.log("medya giriniz")
        }else {
            const {username,password}=this.context;
            e.preventDefault();

            let waiters={
                id: this.state.waiterId,
                waiterName: this.state.waiterName,
                waiterMail: this.state.waiterMail,
                media: this.state.media,
                address:this.state.address,
                phone:this.state.phone,

            };
            console.log('waiters => ' + JSON.stringify(waiters));
            WaiterService.addWaiter(waiters,username,password).then(res=>{
                this.props.history.push('/waiters');
            });
        }


    }
    changeMediaHandler=(event)=>{
        this.setState({mediaId:event.target.value});
        console.log(this.state.mediaId);

        const valueMedia = this.state.mediaList.filter(item => item.mediaId == this.state.mediaId)
        this.setState({media: valueMedia[0]})

    }

    componentDidMount() {
        this.setState({loadingVisible:true})
        axios.get("http://localhost:8080/media/list").then((res) => {


            this.setState({mediaList: res.data, loadingVisible:false})
            console.log("res data", res.data);
        })

    }

   getFiles = () => {
        if (!this.state.mediaList) {
            return null;
        }

        let list = [];
       this.state.mediaList.map(y => {
            list.push(
                <img src={'data:image/png;base64,' + y.fileContent} width="150" style={{margin: 10}}/>
            )
        });
        return (
            <ul>
                {list}
            </ul>
        );
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
                                               onChange={(e)=>{this.setState({waiterName:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Waiter Mail </label>
                                        <input placeholder="Waiter Name" name="waiter" className="form-control"
                                               value={this.state.waiterMail}
                                               onChange={(e)=>{this.setState({waiterMail:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Waiter Address </label>
                                        <input placeholder="Waiter Address" name="address" className="form-control"
                                               value={this.state.address}
                                               onChange={(e)=>{this.setState({address:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Phone Number </label>
                                        <input placeholder="Phone Number" name="phone" className="form-control"
                                               value={this.state.phone}
                                               onChange={(e)=>{this.setState({phone:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Media </label>
                                        <select className="selectpicker form-control" onChange={this.changeMediaHandler}>
                                            {
                                                this.state.mediaList.map(
                                                    media=>
                                                        <option   key={media.mediaId}  value ={media.mediaId}>{media.mediaName}</option>
                                                )
                                            }
                                        </select>

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
                {
                    this.state.loadingVisible?
                        <Loading/>:null
                }
            </div>
        );
    }
}

export default WaiterAdd;