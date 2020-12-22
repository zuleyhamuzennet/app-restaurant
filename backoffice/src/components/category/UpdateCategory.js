import React, {Component} from 'react';
import CategoryService from "../service/CategoryService";
import MediaService from "../service/MediaService";
import Header from "../Header";
import {Link} from "react-router-dom";
import ContextUser from "../ContextUser";

class UpdateCategory extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props);

        this.state = {
            categoryId: this.props.history.location.state?.id,
            categoryName: '',
            catDescription: '',
            mediaList: [],
            mediaId: '',
            media: {}
        }
        this.editCategory = this.editCategory.bind(this);
        this.changeMediaHandler = this.changeMediaHandler.bind(this);
    }

    componentDidMount() {
        const {username, password} = this.context;
        CategoryService.getCategoryById(this.state.categoryId, username, password).then((res) => {

            this.setState({
                categoryId: res.data.categoryId,
                categoryName: res.data.categoryName,
                catDescription: res.data.catDescription,

            });
        });
        MediaService.listAllMedia(username,password).then((res) => {
            this.setState({mediaList: res.data})
        });
    }

    editCategory = (e) => {

        const {username, password} = this.context;
        let category = {
            categoryId: this.state.categoryId,
            categoryName: this.state.categoryName,
            catDescription :this.state.catDescription,
            media:this.state.media


        };
        console.log('category => ' + JSON.stringify(category));
        CategoryService.updateCategory(category, username, password).then(res => {
            this.props.history.push('/list-category')
        });

        e.preventDefault();
    }

    changeMediaHandler = (event) => {
        this.setState({mediaId:event.target.value});
        console.log(this.state.mediaId);

        const valueMedia = this.state.mediaList.filter(item => item.mediaId == this.state.mediaId)
        this.setState({media: valueMedia[0]})

    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Category</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Category </label>
                                        <select className="selectpicker form-control"
                                                onChange={this.changeMediaHandler}>{

                                            this.state.mediaList.map(
                                                media =>
                                                    <option key={media.mediaId}
                                                            value={media.mediaId}>{media.mediaName}</option>
                                            )
                                        }
                                        </select>

                                    </div>

                                    <div className="form-group">
                                        <label> Category Name </label>
                                        <input placeholder="Category Name" name="categoryName" className="form-control"
                                               value={this.state.categoryName} onChange={(e) => {
                                            this.setState({categoryName: e.target.value})
                                        }}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.catDescription} onChange={(e) => {
                                            this.setState({catDescription: e.target.value})
                                        }}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.editCategory}> Update</button>
                                    <Link to="/list-category" className="btn btn-danger"
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

export default UpdateCategory;