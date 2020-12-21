import '../../App.css'
import React, {Component} from 'react'
import TableCategoryService from "../service/TableCategoryService";
import {Card, Table} from 'react-bootstrap';
import Header from "../Header";
import {Link} from "react-router-dom";
import Loading from "../Loading";
import ContextUser from "../ContextUser";

class TableCategoryList extends Component {
    static contextType=ContextUser;

    constructor(props) {
        super(props)

        this.state = {
            tableCategories: []
        }
        this.deleteTableCategory = this.deleteTableCategory.bind(this);

    }

    deleteTableCategory(id) {
        const {username,password}=this.context;
        TableCategoryService.deleteTableCategory(id,username,password).then(res=>{
            this.setState({tableCategories:this.state.tableCategories.filter(table=>table.id!==id)})
        });
    }
    updateTableCategory(id){
        this.props.history.push({
            pathname:`/update-table-category/${id}`,
            state:{
                id:id
            }
        })
    }

    componentDidMount() {
        const {username,password}=this.context;
        this.setState({loadingVisible:true})
        TableCategoryService.listAllTableCategory(username,password).then((res) => {
            this.setState({tableCategories: res.data,loadingVisible:false});
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
                            <th>Table Number</th>
                            <th>Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.tableCategories.map(
                                category =>
                                    <tr key={category.id}>
                                        <td>{category.tableCategoryName}</td>
                                        <td>{category.tableCategoryDesc}</td>
                                        <td>{category.count}</td>

                                        <td>
                                            <button onClick={() => this.updateTableCategory(category.id)}
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

export default TableCategoryList;
