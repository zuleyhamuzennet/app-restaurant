import React, { Component } from 'react';
import CategoryService from "../service/CategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";


class AddCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categoryId:'',
            categoryName:'',
            catDescription: ''


        }
        this.changeCategoryNameHandler = this.changeCategoryNameHandler.bind(this);
        this.changeCatDescriptionHandler = this.changeCatDescriptionHandler.bind(this);
        this.saveCategory=this.saveCategory.bind(this);

    }

    saveCategory = (e) => {
        e.preventDefault();

        let categories= {
            categoryId: this.state.categoryId,
            categoryName: this.state.categoryName,
            catDescription: this.state.catDescription

        };
        console.log('categories => ' + JSON.stringify(categories));
        CategoryService.addCategory(categories).then(res =>{
            this.props.history.push('/list-category');
        });

    }
    changeCategoryNameHandler=(event) =>{
        this.setState({categoryName: event.target.value})
    }

    changeCatDescriptionHandler = (event) => {
        this.setState({catDescription: event.target.value})
    }


    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Category</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> Category Name </label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                               value={this.state.categoryName} onChange={this.changeCategoryNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.catDescription} onChange={this.changeCatDescriptionHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveCategory}>Save</button>
                                    <Link to="/list" className="btn btn-danger" onClick={this.cancel.bind(this)}
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


export default AddCategory;
