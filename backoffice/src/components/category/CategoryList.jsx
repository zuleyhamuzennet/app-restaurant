import '../../App.css'
import React, { Component } from 'react'
import CategoryService from "../service/CategoryService";
import {Card, Table} from 'react-bootstrap';
import Header from "../Header";
import {Link} from "react-router-dom";

class CategoryList extends Component {

    constructor(props){
        super(props)

        this.state = {
            categories: []
        }
        this.deleteCategory=this.deleteCategory.bind(this);
    }

    deleteCategory=(categoryId)=>{
        CategoryService.deleteCategory(categoryId).then();
        window.location.reload();
    }

    componentDidMount() {
        CategoryService.listAllCategories().then((res) => {
            this.setState({categories: res.data});
        });
    }


    render() {
console.log(this.state.categories[0]);
        return (
            <div>
                <Header/>
                <br/>
            <Card className={"border border-dark bg-dark text-white"}>
                <h2 className="text-center">Category List</h2>
                <Card.Body>
                    <Link to="/add-category" className="btn btn-success" >Add Category</Link>
                    <Table bordered hover striped variant ="dark">
                        <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Category Description</th>
                            <th>Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.categories.map(

                                category =>
                                    <tr key={category.categoryId}>
                                        <td>{category.categoryName}</td>
                                        <td>{category.catDescription}</td>

                                        <td>
                                            <button onClick={() => this.editCategory(category.categoryId)}
                                                    className="btn btn-success"> Update
                                            </button>
                                            <button style={{marginLeft: "6px"}} onClick={() => this.deleteCategory(category.categoryId)}
                                                    className="btn btn-outline-info"> Delete
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </Card.Body>


            </Card>
            </div>
        );
    }
}

export default CategoryList;
