import React, {Component} from 'react';
import TableCategoryService from "../service/TableCategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";


class TableCategoryAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            tableCategoryName: '',
            tableCategoryDesc: '',
            count: ''


        }
        this.changeTableCategoryNameHandler = this.changeTableCategoryNameHandler.bind(this);
        this.changeTableCategoryDescHandler = this.changeTableCategoryDescHandler.bind(this);
        this.saveTableCategory = this.saveTableCategory.bind(this);
        this.changeCountHandler=this.changeCountHandler.bind(this);

    }

    saveTableCategory = (e) => {
        e.preventDefault();

        let tableCategories = {
            id: this.state.id,
            tableCategoryName: this.state.tableCategoryName,
            tableCategoryDesc: this.state.tableCategoryDesc,
            count: this.state.count

        };
        console.log('tableCategories => ' + JSON.stringify(tableCategories));
        TableCategoryService.addTableCategory(tableCategories).then(res => {
            this.props.history.push('/table-categories');
        });

    }
    changeTableCategoryNameHandler = (event) => {
        this.setState({tableCategoryName: event.target.value})
    }

    changeTableCategoryDescHandler = (event) => {
        this.setState({tableCategoryDesc: event.target.value})
    }
    changeCountHandler=(event)=>{
        this.setState({count: event.target.value})
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
                            <div className="card-body" key={this.state.id}>
                                <form>

                                    <div className="form-group">
                                        <label> Category Name </label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                               value={this.state.tableCategoryName}
                                               onChange={this.changeTableCategoryNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.tableCategoryDesc}
                                               onChange={this.changeTableCategoryDescHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Table Number</label>
                                        <input placeholder="Table Number" name="table number" className="form-control"
                                               value={this.state.count} onChange={this.changeCountHandler}/>

                                    </div>

                                    <button className="btn btn-success" onClick={this.saveTableCategory}>Save</button>
                                    <Link to="/table-categories" className="btn btn-danger"
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


export default TableCategoryAdd;
