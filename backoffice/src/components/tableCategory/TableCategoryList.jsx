import '../../App.css'
import React, {Component} from 'react'
import TableCategoryService from "../service/TableCategoryService";
import {Card, Table} from 'react-bootstrap';
import Header from "../Header";
import {Link} from "react-router-dom";

class TableCategoryList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tableCategories: []
        }
        this.deleteTableCategory = this.deleteTableCategory.bind(this);

    }

    deleteTableCategory(id) {
        TableCategoryService.deleteCategory(id).then(res => {
            this.setState({categories: this.state.categories.filter(categories => categories.id !== id)});
        });
    }

    componentDidMount() {
        TableCategoryService.listAllTableCategory().then((res) => {
            this.setState({tableCategories: res.data});
        });
    }

    render() {
        console.log(this.state.tableCategories[0]);
        return (
            <div>
                <Header/>
                <br/>
            <Card className={"border border-dark bg-dark text-white"}>

                <Card.Body>
                    <h2 className="text-center">Table Category List</h2>
                    <Link to="/add-table-category" className="btn btn-success">Add Table Category</Link>
                    <Table bordered hover striped variant="dark">
                        <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Category Description</th>
                            <th>Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.tableCategories.map(
                                category =>
                                    <tr key={category.tableId}>
                                        <td>{category.tableCategoryName}</td>
                                        <td>{category.tableCategoryDesc}</td>

                                        <td>
                                            <button onClick={() => this.updateTableCategory(category.tableId)}
                                                    className="btn btn-success"> Update
                                            </button>
                                            <button style={{marginLeft: "6px"}}
                                                    onClick={() => this.deleteTableCategory(category.categoryId)}
                                                    className="btn btn-outline-info"> Delete
                                            </button>
                                            <button style={{marginLeft: "6px"}} className="btn btn-warning"
                                                    onClick={this.saveTableCategory}>Detail
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

export default TableCategoryList;
