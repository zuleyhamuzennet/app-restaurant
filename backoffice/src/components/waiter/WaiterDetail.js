import React, {Component} from 'react';
import ContextUser from "../ContextUser";
import CategoryService from "../service/CategoryService";
import WaiterService from "../service/WaiterService";
import Header from "../Header";
import Loading from "../Loading";

class WaiterDetail extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.history.location.state?.id,
            media: this.props.history.location.state?.media,
            waiters: []

        }
        console.log("id",this.state.id)
    }
    componentDidMount() {
        this.setState({loadingVisible:true})
        const {username,password}=this.context;
        WaiterService.getWaiterById(this.state.id,username,password)
            .then((res)=>{
                this.setState({waiters:res.data,loadingVisible:false});
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
                                        <img src={'data:image/png;base64,' + this.state.media} width="200" height="200" style={{margin: 3}}/>
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

export default WaiterDetail;