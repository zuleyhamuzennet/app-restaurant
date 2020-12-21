import React, {Component} from 'react';
import TableCategoryService from "../service/TableCategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";
import ContextUser from "../ContextUser";

class TableCategoryUpdate extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props);

        this.state={
            id: this.props.history.location.state?.id,
            tableCategoryName: '',
            tableCategoryDesc: '',
            count: ''
        }
    }
    componentDidMount() {
        const {username,password}=this.context;
        TableCategoryService.getTableCategoryById(this.state.id,username,password).then(res=>{
            this.setState({
                id:res.data.id,
                tableCategoryName:res.data.tableCategoryName,
                tableCategoryDesc:res.data.tableCategoryDesc,
                count:res.data.count
            });
        })
    }
    updateTableCategory=(e)=>{
        const {username,password}=this.context;
        e.preventDefault();

        let tableCategory={
            id: this.state.id,
            tableCategoryName: this.state.tableCategoryName,
            tableCategoryDesc: this.state.tableCategoryDesc,
            count: this.state.count

        }
        TableCategoryService.updateTableCategory(tableCategory,username,password).then(res=>{
            this.props.history.push("/table-categories");
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
                            <h3 className="text-center">Add Table Category</h3>
                            <div className="card-body" key={this.state.id}>
                                <form>

                                    <div className="form-group">
                                        <label> Category Name </label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                               value={this.state.tableCategoryName}
                                               onChange={(e)=>{this.setState({tableCategoryName:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.tableCategoryDesc}
                                               onChange={(e)=>{this.setState({tableCategoryDesc:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Table Number</label>
                                        <input placeholder="Table Number" name="table number" className="form-control"
                                               value={this.state.count} onChange={(e)=>{this.setState({count:e.target.value})}}/>

                                    </div>

                                    <button className="btn btn-success" onClick={this.updateTableCategory}>Save</button>
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

export default TableCategoryUpdate;