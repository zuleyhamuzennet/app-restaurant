import React, {Component} from 'react';
import Header from "../Header";
import CategoryService from "../service/CategoryService";

class CategoryDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.history.location.state?.id,
            categories: []

        }
        console.log("id",this.state.id)
    }

    componentDidMount() {

        CategoryService.getCategoryById(this.state.id)
            .then((res)=>{
                this.setState({categories:res.data});
                console.log("detay",res.data);
            })
        this.render();
    }

    render() {
        const categories=this.state
        return (
            <div>
                <Header/>
                <br/>

                <div className="container">
                    <div className="col-sm-12 mt-2">

                        <div className="row">
                            <div className="card col-sm-5">
                                <div className="card-header"> Category Detail</div>
                                <div className="card-body">
                                    <h5 className="card-title">Category : {this.state.categories.categoryName}</h5>
                                    <p className="card-text">Description : {this.state.categories.catDescription}</p>

                                </div>
                            </div>
                            <div className="card col-sm-7">
                                <div className="container">
                                    <div className="col-sm-12 mt-2">

                                        <img src={'data:image/png;base64,' + this.state.categories.media.fileContent} width="100" style={{margin: 3}}/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default CategoryDetail;