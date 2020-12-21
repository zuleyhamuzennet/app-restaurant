import React, {Component} from 'react';
import Header from "../Header";
import CategoryService from "../service/CategoryService";
import Loading from "../Loading";
import ContextUser from "../ContextUser";

class CategoryDetail extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.history.location.state?.id,
            media: this.props.history.location.state?.media,
            categories: []

        }
        console.log("id",this.state.id)
    }

    componentDidMount() {

        this.setState({loadingVisible:true})
        const {username,password}=this.context;
        CategoryService.getCategoryById(this.state.id,username,password)
            .then((res)=>{
                this.setState({categories:res.data,loadingVisible:false});
            })
        this.render();
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>

                <div className="container">
                    <div className="col-sm-12 mt-2">

                        <div className="row">
                            <div className="card col-sm-6">
                                <div className="card-header"> Category Detail</div>
                                <div className="card-body">
                                    <h5 className="card-title">Category : {this.state.categories.categoryName}</h5>
                                    <p className="card-text">Description : {this.state.categories.catDescription}</p>

                                </div>
                            </div>
                            <div className="card col-sm-6">
                                <div className="container">
                                    <div className="col-sm-12 mt-2">
                                        <img src={'data:image/png;base64,' + this.state.media} width="200" height="200" style={{margin: 3}}/>
                                    </div>

                                </div>
                            </div>
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

export default CategoryDetail;