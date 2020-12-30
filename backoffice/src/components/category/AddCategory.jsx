import React, {Component} from 'react';
import CategoryService from "../service/CategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";
import Loading from "../Loading";
import MediaService from "../service/MediaService";
import {AuthContext} from "../contexts/AuthContext";

class AddCategory extends Component {
    static contextType=AuthContext;
    constructor(props) {
        super(props)
        this.state = {
            categoryName: '',
            catDescription: '',
            mediaList: [],
            mediaId: '',
            media: {}
        }
    }

    saveCategory = (e) => {
        const user = this.context;
        e.preventDefault();
        let categories = {
            categoryName: this.state.categoryName,
            catDescription: this.state.catDescription,
            media: this.state.media
        };
        CategoryService.addCategory(categories, user.username, user.password).then(res => {
            this.props.history.push('/list-category');
        });
    }

    changeMediaHandler = (event) => {
        this.setState({mediaId: event.target.value});
        console.log(this.state.mediaId);
        const valueMedia = this.state.mediaList.filter(item => item.id == this.state.mediaId)
        this.setState({media: valueMedia[0]})
    }

    componentDidMount() {
        this.setState({loadingVisible: true})
        const user = this.context;

        MediaService.listAllMedia(user.username, user.password).then((res) => {
            this.setState({mediaList: res.data, loadingVisible: false})
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
                                <h3 className="text-center">Add Category</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label> Category Name </label>
                                            <input placeholder="Product Name" name="productName"
                                                   className="form-control"
                                                   value={this.state.categoryName}
                                                   onChange={(e) => {
                                                       this.setState({categoryName: e.target.value})
                                                   }}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Description </label>
                                            <input placeholder="Description" name="description" className="form-control"
                                                   value={this.state.catDescription}
                                                   onChange={(e) => {
                                                       this.setState({catDescription: e.target.value})
                                                   }}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Media </label>
                                            <select className="selectpicker form-control"
                                                    onChange={this.changeMediaHandler}>
                                                {
                                                    this.state.mediaList.map(
                                                        media =>
                                                            <option key={media.id}
                                                                    value={media.id}>{media.mediaName}
                                                            </option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveCategory}>Save</button>
                                        <Link to="/list-category" className="btn btn-danger"
                                              style={{marginLeft: "10px"}}>Cancel
                                        </Link>
                                    </form>
                                    <div className="card col-sm-8">

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
export default AddCategory;
