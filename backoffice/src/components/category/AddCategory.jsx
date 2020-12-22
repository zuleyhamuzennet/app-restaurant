import React, {Component} from 'react';
import CategoryService from "../service/CategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";
import axios from "axios"
import Loading from "../Loading";
import ContextUser from "../ContextUser";
import MediaService from "../service/MediaService";


class AddCategory extends Component {
    static contextType=ContextUser;
    constructor(props) {
        super(props)

        this.state = {
            categoryId: '',
            categoryName: '',
            catDescription: '',
            mediaList: [],
            mediaId:'',
            media:{}
        }
        this.saveCategory = this.saveCategory.bind(this);
        this.getFiles = this.getFiles.bind(this);
    }
    saveCategory = (e) => {
        const {username,password}=this.context;
        e.preventDefault();
        let categories = {
            categoryId: this.state.categoryId,
            categoryName: this.state.categoryName,
            catDescription: this.state.catDescription,
            media:this.state.media

        };
        console.log('categories => ' + JSON.stringify(categories));
        CategoryService.addCategory(categories,username,password).then(res => {
            this.props.history.push('/list-category');
        });
    }
    changeMediaHandler=(event)=>{
        this.setState({mediaId:event.target.value});
        console.log(this.state.mediaId);

        const valueMedia = this.state.mediaList.filter(item => item.mediaId == this.state.mediaId)
        this.setState({media: valueMedia[0]})
    }
    componentDidMount() {
        this.setState({loadingVisible:true})
        const {username,password}=this.context;

        MediaService.listAllMedia(username,password).then((res) => {
            this.setState({mediaList: res.data,loadingVisible:false})
            console.log("res data", res.data);
        })
    }

    getFiles = () => {
        if (!this.state.mediaList) {
            return null;
        }

        let list = [];
        this.state.mediaList.map(media =>
            list.push(
                <label><img  src={'data:image/png;base64,' + media.fileContent} width="150" style={{margin: 3}}/>{media.mediaName}</label>
            )
        );
        return (
            <ul>
                {list}
            </ul>
        );
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
                                <h3 className="text-center">Add Category</h3>
                                <div className="card-body">
                                    <form>

                                        <div className="form-group">
                                            <label> Category Name </label>
                                            <input placeholder="Product Name" name="productName"
                                                   className="form-control"
                                                   value={this.state.categoryName}
                                                   onChange={(e)=>{this.setState({categoryName:e.target.value})}}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Description </label>
                                            <input placeholder="Description" name="description" className="form-control"
                                                   value={this.state.catDescription}
                                                   onChange={(e)=>{this.setState({catDescription:e.target.value})}}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Media </label>
                                            <select className="selectpicker form-control" onChange={this.changeMediaHandler}>
                                                {

                                                this.state.mediaList.map(

                                                    media=>

                                                        <option   key={media.mediaId}  value ={media.mediaId}>{media.mediaName}</option>
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
                            <div className="card col-sm-6">
                                {this.getFiles()}
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


export default AddCategory;
