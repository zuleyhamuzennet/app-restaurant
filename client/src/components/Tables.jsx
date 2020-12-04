import React, {Component} from 'react';
import Service from "./Service";
import Header from "./Header";
import {Card} from 'semantic-ui-react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.history.location.state?.id,
            count:this.props.history.location.state?.count,
            tableCatId:'',
            tableCategories: []
        }

        this.getTableId=this.getTableId.bind(this);
    }

    componentDidMount() {
        Service.listTableByCategory(this.state.id).then((res) => {
            console.log(res.data);
            this.setState({tableCategories: res.data});
        });

        this.render();
    }

    getTableId=(i)=>{
        this.props.history.push({
            pathname:"/products",
            id:this.state.id,
            tableCatId:i
        });

    }

    render() {

        const counts = [];
         let i;
        for ( i = 1; i <= this.state.count; i++) {

            counts.push(<div className="col-lg-4 col-xs-12 text-center">
                <div className="box" style={{backgroundColor: "#b3ff66"}}>

                    <div className="box-btn" key={i}>
                        <a href="/products"><i className="fa fa-behance fa-3x"
                                               aria-hidden="true"></i>
                            <div className="box-title">
                                <h3 className="box-text1"
                                onClick={()=>this.getTableId({i})}>Table : {i}</h3>
                            </div>
                            <div className="box-text">
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>)
        }


        return (
            <div>
                <Header/>
                <div className="social-box">
                    <div className="container">
                        <div className='row'>
                            {
                                counts
                            }
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default Table;