import React, {Component} from 'react';
import TableCategoryService from "../service/TableCategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";
import MediaService from "../service/MediaService";
import {AuthContext} from "../contexts/AuthContext";


class TableCategoryAdd extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            tableCategoryName: '',
            tableCategoryDesc: '',
            count: '',
            mediaList: [],
            media: {},
            mediaId: ''
        }
    }

    saveTableCategory = (e) => {
        const user = this.context;
        e.preventDefault();

        let tableCategories = {
            id: this.state.id,
            tableCategoryName: this.state.tableCategoryName,
            tableCategoryDesc: this.state.tableCategoryDesc,
            media: this.state.media,
            count: this.state.count

        };
        TableCategoryService.addTableCategory(tableCategories, user.username, user.password).then(res => {
            this.props.history.push('/table-categories');
        });
    }

    changeMediaHandler = (e) => {
        this.setState({mediaId: e.target.value});
        console.log(this.state.mediaId);
        const valueMedia = this.state.mediaList.filter(item => item.id == this.state.mediaId)
        this.setState({media: valueMedia[0]})
    }

    componentDidMount() {
        const user = this.context;
        MediaService.listAllMedia(user.username, user.password).then((res) => {
                this.setState({mediaList: res.data})
            }
        )
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
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                               value={this.state.tableCategoryName}
                                               onChange={(e) => {
                                                   this.setState({tableCategoryName: e.target.value})
                                               }}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.tableCategoryDesc}
                                               onChange={(e) => {
                                                   this.setState({tableCategoryDesc: e.target.value})
                                               }}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Table Number</label>
                                        <input placeholder="Table Number" name="table number" className="form-control"
                                               value={this.state.count} onChange={(e) => {
                                            this.setState({count: e.target.value})
                                        }}/>
                                    </div>
                                    <div className="form-group">
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
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveTableCategory}>Save</button>
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
}


export default TableCategoryAdd;
