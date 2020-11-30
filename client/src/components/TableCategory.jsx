import React, {Component} from 'react';
import Service from "./Service";
import Header from "./Header";
import {Card} from 'semantic-ui-react';
import '../App.css';

class TableCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableCategory: [],
            tables: []
        }
        this.listTableByCategory = this.listTableByCategory.bind(this);
    }


    listTableByCategory(id) {
        Service.listTableByCategory(id).then((res) => {

            this.setState({tables: res.data.tables});
            console.log(res.data);
        });
        this.render();

    }
    componentDidMount() {
        Service.listAllTableCategory().then((res) => {
            console.log(res.data);
            this.setState({tableCategory: res.data});
        });

        this.render();
    }
    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="social-box">
                    <div className="container">
                        <div className="row">

                            {
                                this.state.tableCategory.map(
                                    category =>

                                        <div className="col-lg-4 col-xs-12 text-center">
                                            <div className="box" style={{backgroundColor: "#a5e387"}}>

                                                <div className="box-btn" key={category.tableId}>
                                                    <a href="/tables"><i className="fa fa-behance fa-3x"
                                                                         aria-hidden="true"></i>
                                                        <div className="box-title">
                                                            <h3 className="box-text1"
                                                                onClick={() => this.listTableByCategory(category.tableId)}>{category.tableCategoryName}</h3>
                                                        </div>
                                                        <div className="box-text">
                                                            <span></span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableCategory;