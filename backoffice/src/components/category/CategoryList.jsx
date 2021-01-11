import '../../App.css'
import React, {Component} from 'react'
import CategoryService from "../service/CategoryService";
import {Card, Table} from 'react-bootstrap';
import Header from "../Header";
import {Link} from "react-router-dom";
import Loading from "../Loading";
import {AuthContext} from "../contexts/AuthContext";

class CategoryList extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            id: ''
        }
    }

    updateCategory = (category) => {
        this.props.history.push({
            pathname: `update-category/{category.id}`,
            state: {
                categories: category
            }
        })
    }

    deleteCategory = (id) => {
        console.log("delete :", id);
        const user = this.context;
        CategoryService.deleteCategory(id, user.username, user.password).then(res => {
            this.setState({categories: this.state.categories.filter(category => category.id !== id)})
        });
    }

    detailCategory = (category) => {
        this.props.history.push({
            pathname: `category-detail/{category.id}`,
            state: {
                categories: category
            }
        })
    }

    componentDidMount() {
        const user = this.context;
        this.setState({loadingVisible: true})
        CategoryService.listAllCategories(user.username, user.password).then((res) => {
            this.setState({categories: res.data, loadingVisible: false});
            console.log("categori", res.data);
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <Card className={"border border-dark bg-dark text-white"}>
                    <h2 className="text-center">Category List</h2>
                    <Card.Body>
                        <Link to="/add-category" className="btn btn-success">Add Category</Link>
                        <Table bordered hover striped variant="dark">
                            <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Category Description</th>
                                <th>Media</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.categories.map(
                                    category =>
                                        <tr key={category.id}>
                                            <td>{category.categoryName}</td>
                                            <td>{category.catDescription}</td>
                                            <td><img src={'data:image/png;base64,' + category.media.fileContent}
                                                     width="40" style={{margin: 3}}/>
                                            </td>
                                            <td>
                                                <button onClick={() => this.updateCategory(category)}
                                                        className="btn btn-success"> Update
                                                </button>
                                                <button style={{marginLeft: "6px"}}
                                                        onClick={() => this.deleteCategory(category.id)}
                                                        className="btn btn-outline-info"> Delete
                                                </button>
                                                <button onClick={() => this.detailCategory(category)}
                                                        style={{marginLeft: "6px"}}
                                                        className="btn btn-warning">Detail
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                            </tbody>
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
}

export default CategoryList;
