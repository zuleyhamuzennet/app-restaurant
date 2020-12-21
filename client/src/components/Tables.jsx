import React, {Component} from 'react';
import Service from "./Service";
import Header from "./Header";
import Loading from "./Loading";
import ContextUser from "./ContextUser";

class Table extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.history.location.state?.id,
            count: this.props.history.location.state?.count,
            tableId: '',
            selectWaiterId: '',
            tableCategories: [],
            waiters: [],
            getLocale: ''

        }

        this.getTableId = this.getTableId.bind(this);
        this.goProduct = this.goProduct.bind(this);
        this.getWaiterId = this.getWaiterId.bind(this);

    }

    async componentDidMount() {
        this.setState({loadingVisible:true})
        const {username,password}=this.context;
       Service.listTableByCategory(this.state.id,username,password).then((res) => {
            console.log(res.data);
            this.setState({tableCategories: res.data,loadingVisible:false});
        });

        await Service.listAllWaiters(username,password).then((res) => {
            console.log("waiters=>" + res.data);
            this.setState({waiters: res.data,loadingVisible:false});
        });
    }

    getWaiterId(id) {
        this.setState({selectWaiterId: id})
    }

    getTableId(i) {
        this.setState({tableId: i});
    }

    goProduct() {
        this.props.history.push({
                pathname: "/products",
                state: {
                    selectWaiterId: this.state.selectWaiterId,
                    tableId: this.state.tableId,
                    id: this.state.id
                }
            }
        );
        localStorage.setItem('tableId', JSON.stringify(this.state.tableId));
        localStorage.setItem('tableCategoryId', JSON.stringify(this.state.id));
    }

    render() {

        const counts = [];

        for (let i = 1; i <= this.state.count; i++) {
            const contidion = JSON.parse(localStorage.getItem(`${this.state.id}+${i}`)) === null;
            counts.push(
                (

                    <div className="col-lg-4 col-xs-12 text-center">
                        <div className="box" style={{backgroundColor: contidion ? "#b3ff66" : "#e95666"}}>

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
                                            <div className="col-md-12 mx-auto">
                                                <div className="row">
                                                    <div>
                                                        <table className="table  table-hover" style={{maxWidth: '100%'}} >
                                                            <thead>
                                                            <th>Image</th>
                                                            <th>Name</th>


                                                            </thead>
                                                            <tbody>

                                                            {
                                                                this.state.waiters.map(
                                                                    waiter =>


                                                                        <tr key={waiter.waiterId}>
                                                                            <td><img
                                                                                src={'data:image/png;base64,' + waiter.media.fileContent}
                                                                                width="40" height="40"
                                                                                style={{margin: 3}}/>
                                                                            </td>
                                                                            <a
                                                                               onClick={() => this.getWaiterId(waiter.waiterId)}>
                                                                                <td>{waiter.waiterName}</td></a>

                                                                        </tr>
                                                                )

                                                            }
                                                            </tbody>
                                                        </table>

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
                {
                    this.state.loadingVisible?
                        <Loading/>:null
                }

            </div>
        );
    }
}

export default Table;