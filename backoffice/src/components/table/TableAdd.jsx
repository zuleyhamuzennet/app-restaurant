import React, {Component} from 'react';
import TableService from "../service/TableService";
import TableCategoryService from "../service/TableCategoryService";
import Header from "../Header";

class TableAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tableNumber: '',
            tableDescription: '',
            tableCategories: []
        }
        this.changeTableCategoryHandler = this.changeTableCategoryHandler.bind(this);
        this.changeTableNumberHandler = this.changeTableNumberHandler.bind(this);
        this.changeTableDescriptionHandler = this.changeTableDescriptionHandler.bind(this);
        this.saveTable = this.saveTable.bind(this);
    }
    saveTable = (e) => {
        e.preventDefault();
        let tables = {
            tableNumber: this.state.tableNumber,
            tableDescription: this.state.tableDescription
        };
        console.log('tables => ' + JSON.stringify(tables,this.state.tableCategory));

        TableService.addTable(tables,this.state.tableCategory).then(res => {
            this.props.history.push('/tables');
        });

    }
    changeTableCategoryHandler = (event) => {

        this.setState({tableCategory: event.target.value})
    }
    changeTableNumberHandler = (event) => {
        this.setState({tableNumber: event.target.value})
    }
    changeTableDescriptionHandler = (event) => {
        this.setState({tableDescription: event.target.value})
    }

    cancel() {
        this.props.history.push('/tables');
    }

    componentDidMount() {
        TableCategoryService.listAllTableCategory().then((res) => {
            this.setState({tableCategories: res.data});
        });
    }
    render() {
        console.log(this.state.tableCategories);
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Table</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Table Category </label>

                                        <select className="selectpicker form-control" onChange={this.changeTableCategoryHandler}>{


                                            this.state.tableCategories.map(category =>
                                                <option key={category.tableId} value={category.tableId}
                                                >{category.tableCategoryName}</option>
                                            )
                                        }
                                        </select>

                                    </div>
                                    <div className="form-group">
                                        <label> Table Number </label>
                                        <input placeholder="table Number" name="productName" className="form-control"
                                               value={this.state.tableNumber} onChange={this.changeTableNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.tableDescription} onChange={this.changeTableDescriptionHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveTable}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
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
}


export default TableAdd;
