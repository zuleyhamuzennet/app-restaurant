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
    }

    listTableByCategory=(id,count)=> {
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
                        {this.getTableCategoriesMap()}
                    </div>
                </div>
                {
                    this.state.loadingVisible ?
                        <Loading/> : null
                }
            </div>
        );
    }
    getTableCategoriesMap() {
        return <div className="row">
            {
                this.state.tableCategory.map(
                    category =>
                        <div className="col-lg-4 col-xs-12 text-center">
                            <div className="box" style={{backgroundColor: "#a5e387"}}>
                                <div className="box-btn" key={category.id}
                                     onClick={() => this.listTableByCategory(category.id, category.count)}>
                                    <div><i className="fa fa-behance fa-3x"
                                            aria-hidden="true"></i>
                                        <div className="box-title">
                                            <div className="box-body">
                                                <h3>{category.tableCategoryName}</h3>
                                                <img style={{height: "150px", width: "200px"}}
                                                     className="card-img-top"
                                                     src={'data:image/png;base64,' + category.media.fileContent}/>
                                            </div>
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
        </div>;
    }
}
export default TableCategory;