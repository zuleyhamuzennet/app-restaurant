import React, {Component} from 'react';
import TableService from "../service/TableService";
import TableCategoryService from "../service/TableCategoryService";
import Header from "../Header";

class TableDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            table:'',
            id:this.props.match.params.id,
            category:''
        }
    }

    componentDidMount() {
        TableService.getTableById(this.state.id)
            .then((res)=>{
                this.setState({table:res.data});
            })
        TableCategoryService.getTableCategoryById(this.state.id)
            .then((res)=>{
                this.setState({category: res.data})
            })

    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
            <div className="container">

                <div className="card w-75">
                    <div className="card-body">
                        <h5 className="card-title">Table Number : {this.state.table.tableNumber}</h5>
                        <p className="card-text">Table Category : {this.state.category.tableCategoryName}</p>
                        <p className="card-text">Table Description : {this.state.table.tableDescription}</p>

                    </div>
                </div>

            </div>
            </div>
        );
    }
}

export default TableDetail;