import '../../App.css'
import React, {Component} from 'react'
import TableService from "../service/TableService";
import {Card, Table} from 'react-bootstrap';
import TableCategoryService from "../service/TableCategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";

class TableList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tableCategories: []
        }
        this.deleteTable = this.deleteTable.bind(this);
    }

    deleteTable(id) {
        TableService.deleteTable(id).then();
        window.location.reload();
    }
    updateTable(id,tableId){
        this.props.history.push({
            pathname:"/table-update",
            state:{
                id: id,
                tableId:tableId
            }
        })

    }

    componentDidMount() {
        TableCategoryService.listAllTableCategory().then((response) => {
            this.setState({tableCategories: response.data});
        });
    }

    fiterCategory = (tableCategoryName) => {
        const array = this.state.tableCategories.filter(item => item.tableCategoryName == tableCategoryName)
        this.setState({tableCategories: array})
        console.log(array);
        this.render();
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <Card className={"border border-dark bg-dark text-white"}>

                    <Card.Body>
                        <h2 className="text-center">Table List</h2>
                        <Link to="/table-add" className="btn btn-success">Add Table</Link>
                        <Table bordered hover striped variant="dark">
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>Number</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                            </thead>

                            {this.state.tableCategories.map(
                                category =>
                                    <tbody key={category.tableId}>

                                    {
                                        category.tables.map(
                                            table =>
                                                <tr key={table.id}>
                                                    <td>
                                                        <label
                                                            onClick={() => this.fiterCategory(category.tableCategoryName)}>{category.tableCategoryName}</label>
                                                    </td>
                                                    <td>{table.tableNumber}</td>
                                                    <td>{table.tableDescription}</td>
                                                    <td>
                                                        <button onClick={()=>this.updateTable(table.id,category.id)}
                                                                className="btn btn-success"> Update
                                                        </button>
                                                        <button style={{marginLeft: "6px"}}
                                                                onClick={() => this.deleteTable(table.id)}
                                                                className="btn btn-outline-info"> Delete
                                                        </button>
                                                        <Link to={`/table-detail/${table.id}`}
                                                              style={{marginLeft: "6px"}} className="btn btn-warning"
                                                        >Detail
                                                        </Link>
                                                    </td>

                                                </tr>
                                        )
                                    }
                                    </tbody>
                            )
                            }

                        </Table>
                    </Card.Body>


                </Card>
            </div>
        );
    }
}

export default TableList;
