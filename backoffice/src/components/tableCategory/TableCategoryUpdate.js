import React, {Component} from 'react';
import TableCategoryService from "../service/TableCategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";
import MediaService from "../service/MediaService";
import {AuthContext} from "../contexts/AuthContext";

class TableCategoryUpdate extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);

        this.state = {
            tableCategories: this.props.history.location.state?.tableCategories,
            id: this.props.history.location.state?.tableCategories.id,
            tableCategoryName: this.props.history.location.state?.tableCategories.tableCategoryName,
            tableCategoryDesc: this.props.history.location.state?.tableCategories.tableCategoryDesc,
            count: this.props.history.location.state?.tableCategories.count,
            media: [],
            mediaList: [],
            mediaId: ''
        }
    }

    updateTableCategory = (e) => {
        const user = this.context;
        e.preventDefault();

        let tableCategory = {
            id: this.state.id,
            tableCategoryName: this.state.tableCategoryName,
            tableCategoryDesc: this.state.tableCategoryDesc,
            count: this.state.count,
            media: this.state.media,
        }
        TableCategoryService.updateTableCategory(tableCategory, user.username, user.password).then(res => {
            this.props.history.push("/table-categories");
        })
    }

    changeMediaHandler = (e) => {
        this.setState({mediaId: e.target.value});
        const mediaArray = this.state.mediaList.filter(item => item.id == this.state.mediaId);
        this.setState({media: mediaArray[0]});
    }

    componentDidMount() {
        const {username, password} = this.context;
        MediaService.listAllMedia(username, password).then((res) => {
            this.setState({mediaList: res.data})
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Table Category</h3>
                            <div className="card-body" key={this.state.id}>
                                <form>
                                    <div className="form-group">
                                        <label> Category Name </label>
                                        <input placeholder="Category" name="tableCategoryName" className="form-control"
                                               value={this.state.tableCategoryName}
                                               onChange={(e) => {
                                                   this.setState({tableCategoryName: e.target.value})
                                               }}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="tableCategoryDesc"
                                               className="form-control"
                                               value={this.state.tableCategoryDesc}
                                               onChange={(e) => {
                                                   this.setState({tableCategoryDesc: e.target.value})
                                               }}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Table Number</label>
                                        <input placeholder="Table Number" name="count" className="form-control"
                                               value={this.state.count} onChange={(e) => {
                                            this.setState({count: e.target.value})
                                        }}/>
                                    </div>

                                    {this.mediaMap()}

                                    <button className="btn btn-success" onClick={this.updateTableCategory}>Save</button>
                                    <Link to="/table-categories" className="btn btn-danger"
                                          style={{marginLeft: "10px"}}>Cancel
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    mediaMap() {
        return <div className="form-group">
            <label>Media</label>
            <select className="selectpicker form-control"
                    onChange={this.changeMediaHandler}>
                {
                    this.state.mediaList.map(
                        media =>
                            <option key={media.id}
                                    value={media.id}>{media.mediaName}</option>
                    )
                }
            </select>
        </div>;
    }
}

export default TableCategoryUpdate;