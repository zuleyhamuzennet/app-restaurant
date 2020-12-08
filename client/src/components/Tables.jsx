import React, {Component} from 'react';
import Service from "./Service";
import Header from "./Header";
import Waiters from "./Waiters";
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.history.location.state?.id,
            count: this.props.history.location.state?.count,
            tableId: '',
            selectWaiterId:'',
            tableCategories: [],
            waiters: [],
            getLocale:''

        }

        this.getTableId = this.getTableId.bind(this);
        this.goProduct = this.goProduct.bind(this);
        this.getWaiterId = this.getWaiterId.bind(this);

    }

    componentDidMount() {
        Service.listTableByCategory(this.state.id).then((res) => {
            console.log(res.data);
            this.setState({tableCategories: res.data});
        });

        Service.listAllWaiters().then((res) => {
            console.log("waiters=>" + res.data);
            this.setState({waiters: res.data});
        });

        this.render();
    }

    getWaiterId(id){
        this.setState({selectWaiterId:id})
    }
    getTableId  (i) {
        this.setState({tableId:i});
    }

    goProduct() {
        this.props.history.push({
            pathname:"/products",
            state:{
                selectWaiterId: this.state.selectWaiterId,
                tableId: this.state.tableId,
                id: this.state.id
            }
        }
        );
        localStorage.setItem('tableId',JSON.stringify(this.state.tableId));
        localStorage.setItem('tableCategoryId',JSON.stringify(this.state.id));
        console.log("waiter=>"+this.state.selectWaiterId);
        console.log("tableId=>"+this.state.tableId);
    }

    render() {

        const counts = [];

        for (let i = 1; i <= this.state.count; i++) {
            const contidion= JSON.parse(localStorage.getItem(`${this.state.id}+${i}`))===null;
            counts.push(
                // <Waiters content={"içerik buraya gelsin"} trigger={
                (

                    <div className="col-lg-4 col-xs-12 text-center">
                        <div className="box" style={{backgroundColor:contidion? "#b3ff66":"#e95666"}}>

                            <div className="box-btn" key={i}>
                                <a data-toggle="modal" data-target="#exampleModalLong"><i
                                    className="fa fa-behance fa-3x"
                                    aria-hidden="true"></i>
                                    <div className="box-title">
                                        <h3 className="box-text1 "
                                            onClick={() => this.getTableId(i)}>Table : {i}
                                        </h3>
                                    </div>
                                    <div className="box-text">
                                        <span></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>)
                // }></Waiters>
            )
        }


        return (
            <div>
                <Header/>


                <div className="social-box">
                    <div className="container">
                        <div className='row'>
                            <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
                                 aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle">Waiters</h5>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="col-md-11 mx-auto" style={{padding:'10px 0'}}>
                                                <div className="row">
                                                <div className="col-md-6 ">
                                                    <div className="list-group">
                                                        <tbody>

                                                        {

                                                            this.state.waiters.map(
                                                                waiter =>

                                                                    <tr key={waiter.waiterId}>
                                                                        <td>
                                                                        <a href="#"
                                                                           className="list-group-item list-group-item-action"
                                                                           onClick={()=> this.getWaiterId(waiter.waiterId)}>{waiter.waiterName}</a>
                                                                        </td>

                                                                    </tr>
                                                            )

                                                        }
                                                        </tbody>

                                                    </div>
                                                </div>
                                            </div>
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-dismiss="modal">Close
                                            </button>

                                            <button data-dismiss="modal" onClick={() => this.goProduct()} type="button"
                                                    className="btn btn-primary ">Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                counts

                            }
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default Table;