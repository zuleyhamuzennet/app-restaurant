import '../../App.css'
import React, {Component} from 'react'
import TableCategoryService from "../service/TableCategoryService";
import {Card, Table} from 'react-bootstrap';
import Header from "../Header";
import {Link} from "react-router-dom";
import Loading from "../Loading";
import {AuthContext} from "../contexts/AuthContext";

class TableCategoryList extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props)
        this.state = {
            tableCategories: []
        }
    }

    deleteTableCategory = (id) => {
        const user = this.context;
        TableCategoryService.deleteTableCategory(id, user.username, user.password).then(res => {
            this.setState({tableCategories: this.state.tableCategories.filter(table => table.id !== id)})
        });
    }

    updateTableCategory(category) {
        this.props.history.push({
            pathname: `/update-table-category/${category.id}`,
            state: {
                tableCategories: category
            }
        })
    }

    componentDidMount() {
        const user = this.context;
        this.setState({loadingVisible: true})
        TableCategoryService.listAllTableCategory(user.username, user.password).then((res) => {
            this.setState({tableCategories: res.data, loadingVisible: false});
        });
    }

    render() {
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
                                <th>Table Number</th>
                                <th>Media</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            {this.tableCategoryMap()}
                        </Table>
                    </Card.Body>
                </Card>
                {
                    this.state.loadingVisible ?
                        <Loading/> : null
                }
            </div>
        );
    }

    tableCategoryMap() {
        return <tbody>
        {
            this.state.tableCategories.map(
                category =>
                    <tr key={category.id}>
                        <td>{category.tableCategoryName}</td>
                        <td>{category.tableCategoryDesc}</td>
                        <td>{category.count}</td>
                        <td><img src={'data:image/png;base64,' + category.media.fileContent} width="40" height="40"
                                 style={{margin: 3}}/>
                        </td>
                        <td>
                            <button onClick={() => this.updateTableCategory(category)}
                                    className="btn btn-success"> Update
                            </button>
                            <button style={{marginLeft: "6px"}}
                                    onClick={() => this.deleteTableCategory(category.id)}
                                    className="btn btn-outline-info"> Delete
                            </button>
                            <button st
                                    className="btn btn-warning">Detail
                            </button>
                        </td>
                    </tr>
            )
        }
        </tbody>;
    }
}

export default TableCategoryList;
