import React, {Component} from 'react';
import Header from "../Header";
import {Link} from "react-router-dom";
import TableService from "../service/TableService";
import TableCategoryService from "../service/TableCategoryService";

class TableUpdate extends Component {

    constructor(props) {
        super(props);
        this.state={
            id: this.props.history.location.state?.id,
            tableId: this.props.history.location.state?.tableId,
            tableNumber:'',
            tableDescription:'',
            tableCategories:[]

        }
        this.changeCategoryHandler=this.changeCategoryHandler.bind(this);
        this.changeTableDescriptionHandler=this.changeTableDescriptionHandler.bind(this);
        this.changeTableNumberHandler=this.changeTableNumberHandler.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
    }

    updateTable=(e)=>{
        let table={
            tableNumber: this.state.tableNumber,
            tableDescription: this.state.tableDescription,
            id: this.state.id
        };
        console.log('table => ' + JSON.stringify(table));
        TableService.updateTable(table, this.state.id).then(response=>{
            this.props.history.push('/tables');
        });

        e.preventDefault();
    }

    componentDidMount() {
        TableService.getTableById(this.state.id).then((res)=>{
            this.setState({
                id: res.data.id,
                tableNumber:res.data.tableNumber,
                tableDescription:res.data.tableDescription

            });
        });
        TableCategoryService.listAllTableCategory()
            .then((res)=>{
                this.setState({tableCategories: res.data});
            });
    }

    changeCategoryHandler = (event) => {
        this.setState({category: event.target.value})
    }
    changeIdHandler = (event) => {
        this.setState({id: event.target.value})
    }
    changeTableNumberHandler = (event) => {
        this.setState({tableNumber: event.target.value})
    }
    changeTableDescriptionHandler = (event) => {
        this.setState({tableDescription: event.target.value})
    }


    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Table</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Table Category </label>
                                        <select className="selectpicker form-control" onChange={this.changeCategoryHandler}>{


                                            this.state.tableCategories.map(category =>
                                                <option key={category.tableId} value={category.tableId}
                                                >{category.tableCategoryName}</option>
                                            )
                                        }
                                        </select>

                                    </div>

                                    <div className="form-group">
                                        <label> Table Number </label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                               value={this.state.tableNumber} onChange={this.changeTableNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Table Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.tableDescription} onChange={this.changeTableDescriptionHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateTable}> Update</button>
                                    <Link to="/list" className="btn btn-danger"
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

export default TableUpdate;