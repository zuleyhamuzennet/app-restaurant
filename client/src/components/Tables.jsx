import React, {Component} from 'react';
import Service from "./Service";
import Header from "./Header";
import {Card} from 'semantic-ui-react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state={
            tables:[]
        }
        this.listTableById = this.listTableById.bind(this);
    }


    listTableById(id) {
        Service.listTableById(id).then((res) => {

            localStorage.setItem("tableId",this.state.tables.tableId);
            this.setState({tables: res.data.tables});
            console.log(res.data);
        });
        this.render();
        console.log(localStorage.setItem("tableId",this.state.tables.tableId));
    }



    componentDidMount() {
        Service.listAllTables().then((res) => {
            console.log(res.data);
            this.setState({tables: res.data});
        });

        this.render();
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="social-box">
                <div className="container">
                    <div className='row'>
                            {
                                this.state.tables.map(
                                    table =>
                                        <div className="col-lg-4 col-xs-12 text-center">
                                            <div className="box" style={{backgroundColor: "#b3ff66"}}>

                                                <div className="box-btn" key={table.id}>
                                                    <a href="/products"><i className="fa fa-behance fa-3x"
                                                                         aria-hidden="true"></i>
                                                        <div className="box-title">
                                                            <h3 className="box-text1"
                                                                onClick={() => this.listTableById(table.id)}>{table.tableNumber}</h3>
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

export default Table;