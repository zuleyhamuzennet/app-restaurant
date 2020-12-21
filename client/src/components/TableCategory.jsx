import React, {Component} from 'react';
import Service from "./Service";
import Header from "./Header";
import '../App.css';
import Loading from "./Loading";
import ContextUser from "./ContextUser";

class TableCategory extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props);
        this.state = {
            tableCategory: [],
            tables: [],
            tableCategoryId:''

        }
        this.listTableByCategory = this.listTableByCategory.bind(this);
    }


    listTableByCategory(id,count) {

        this.setState({tableCategoryId:id})
        this.props.history.push({
            pathname:"/tables",
            state:{
            id:id,
                count:count
            }
        })


    }
    componentDidMount() {
        this.setState({loadingVisible:true})
        const {username,password}=this.context;
        Service.listAllTableCategory(username,password).then((res) => {
            console.log(res.data);
            this.setState({tableCategory: res.data,loadingVisible:false});
        });
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

                                                <div className="box-btn" key={category.id}>
                                                    <div><i className="fa fa-behance fa-3x"
                                                                         aria-hidden="true"></i>
                                                        <div className="box-title">
                                                            <h3 className="box-text1"
                                                                onClick={() => this.listTableByCategory(category.id,category.count)}>{category.tableCategoryName}</h3>
                                                        </div>
                                                        <div className="box-text">
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                )
                            }

                        </div>
                    </div>
                </div>
                {
                    this.state.loadingVisible?
                        <Loading/>:null
                }
            </div>
        );
    }
}

export default TableCategory;