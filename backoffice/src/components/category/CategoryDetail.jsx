import React, {Component} from 'react';
import Header from "../Header";
import Loading from "../Loading";
import {AuthContext} from "../contexts/AuthContext";

class CategoryDetail extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            categories: this.props.history.location.state?.categories,
        }
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
                            <div className="card col-sm-5">
                                <div className="container">
                                    <div className="col-sm-12 mt-2">
                                        <img src={'data:image/png;base64,' + this.state.categories.media.fileContent}
                                             width="200" height="200" style={{margin: 3}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {
                    this.state.loadingVisible ?
                        <Loading/> : null
                }
            </div>
        );
    }
}

export default CategoryDetail;