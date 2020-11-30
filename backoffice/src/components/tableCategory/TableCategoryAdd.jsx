import React, { Component } from 'react';
import TableCategoryService from "../service/TableCategoryService";
import Header from "../Header";


class TableCategoryAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tableId:'',
            tableCategoryName:'',
            tableCategoryDesc: ''


        }
        this.changeTableCategoryNameHandler = this.changeTableCategoryNameHandler.bind(this);
        this.changeTableCategoryDescHandler = this.changeTableCategoryDescHandler.bind(this);
        this.saveTableCategory=this.saveTableCategory.bind(this);

    }

    saveTableCategory = (e) => {
        e.preventDefault();

        let tableCategories= {
            tableId: this.state.tableId,
            tableCategoryName: this.state.tableCategoryName,
            tableCategoryDesc: this.state.tableCategoryDesc

        };
        console.log('tableCategories => ' + JSON.stringify(tableCategories));
        TableCategoryService.addTableCategory(tableCategories).then(res =>{
            this.props.history.push('/table-categories');
        });

    }
    changeTableCategoryNameHandler=(event) =>{
        this.setState({tableCategoryName: event.target.value})
    }

    changeTableCategoryDescHandler = (event) => {
        this.setState({tableCategoryDesc: event.target.value})
    }


    cancel(){
        this.props.history.push('/table-categories');
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Table Category</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> Category Name </label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                               value={this.state.tableCategoryName} onChange={this.changeTableCategoryNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.tableCategoryDesc} onChange={this.changeTableCategoryDescHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveTableCategory}>Save</button>
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


export default TableCategoryAdd;
