import React, {Component} from 'react';
import Service from "./Service";

class CategoryTable extends Component {
    constructor(props) {
        super(props);
        this.state={
            tableCategories: [],
            tables:[]
        }
    }

    componentDidMount() {
        Service.listAllTableCategory().then((res) => {
            console.log(res.data);
            this.setState({tableCategories: res.data});
        });

        this.render();
    }

    addTable=(count,id)=>{
        const tableId =this.state.tableCategories.id;


        count.forEach(function (table){
            tableId.innerHTML+=`
              <div className="row">
            <div className="col-lg-12">
                <p>
                    <a href="#" className="btn btn-sq-xs btn-primary">
                        <i className="fa fa-user fa-1x">{table.id}</i><br/>
                    </a>
                </p>
            </div>
        </div>
  `
        });


    }

    render() {
        return (
            <div>
                <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active" style={{backgroundColor:'#258d2f'}}>
                Table Categories
                </a>
                <a>
                {
                    this.state.tableCategories.map(
                        category =>
                            <tr key={category.id}>
                                <a href="#" className="list-group-item list-group-item-action"
                                   onClick={() => this.addTable(category.id,category.count)}>{category.tableCategoryName}</a>
                            </tr>
                    )
                }
                </a>
                </div>
            </div>
        );
    }
}

export default CategoryTable;