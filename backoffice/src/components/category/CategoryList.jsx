import '../../App.css'
import React, { Component } from 'react'
import CategoryService from "../service/CategoryService";
import {Card, Table} from 'react-bootstrap';
import Header from "../Header";
import {Link} from "react-router-dom";
import Loading from "../Loading";
import ContextUser from "../ContextUser";

class CategoryList extends Component {
    static contextType=ContextUser;

    constructor(props){
        super(props)

        this.state = {
            categories: [],
            categoryId:''
        }
        this.detailCategory=this.detailCategory.bind(this);
        this.deleteCategory=this.deleteCategory.bind(this);
        this.updateCategory=this.updateCategory.bind(this);
    }
    updateCategory=(categoryId)=>{
        console.log("categoryId",categoryId);
        this.props.history.push({
            pathname: `update-category/{categoryId}`,
            state:{
                id:categoryId
            }
        })
    }

    deleteCategory=(categoryId)=>{
        const {username,password}=this.context;
        CategoryService.deleteCategory(categoryId,username,password).then(res=>{
            this.setState({categories:this.state.categories.filter(category=>category.categoryId!==categoryId)})
        });
    }

    detailCategory=(categoryId,media)=>{
        console.log("categoryId",categoryId);
        this.props.history.push({
            pathname: `category-detail/{categoryId}`,
            state:{
                id:categoryId,
                media:media
            }
        })
    }

    componentDidMount() {
        const {username,password}=this.context
        this.setState({loadingVisible:true})
        CategoryService.listAllCategories(username,password).then((res) => {
            this.setState({categories: res.data,loadingVisible:false});

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
                            <th>Media </th>
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
                                        <td><img src={'data:image/png;base64,' + category.media.fileContent} width="40" style={{margin: 3}}/>
                                            </td>


                                        <td>
                                            <button onClick={() => this.updateCategory(category.categoryId)}
                                                    className="btn btn-success"> Update
                                            </button>
                                            <button style={{marginLeft: "6px"}} onClick={() => this.deleteCategory(category.categoryId)}
                                                    className="btn btn-outline-info"> Delete
                                            </button>
                                            <button onClick={() => this.detailCategory(category.categoryId,category.media.fileContent)} style={{marginLeft: "6px"}}
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
                    this.state.loadingVisible?
                        <Loading/>:null
                }
            </div>
        );
    }
}

export default CategoryList;
