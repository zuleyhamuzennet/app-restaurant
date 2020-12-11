import React, {Component} from 'react';
import ProductService from "../service/ProductService";
import CategoryService from "../service/CategoryService";
import MediaService from "../service/MediaService";
import Header from "../Header";
import {Link} from "react-router-dom";

class UpdateCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.history.location.state?.id,
            categoryName: '',
            catDescription: '',
            fileContent:'',
            mediaList:[]
        }
        this.editCategory=this.editCategory.bind(this);
        this.changeCategoryNameHandler=this.changeCategoryNameHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changeFileContentHandler=this.changeFileContentHandler.bind(this);
    }

    componentDidMount() {
        CategoryService.getCategoryById(this.state.id).then((res) => {

            this.setState({
                id: res.data.id,
              categoryName: res.data.categoryName,
                catDescription: res.data.catDescription,
                //fileContent:res.data.data.fileContent,

            });
        });
       MediaService.listAllMedia().then((res)=>{
            this.setState({mediaList:res.data})
        });
    }

    editCategory = (e) => {

        let category = {
            id:this.state.id,
            categoryName: this.state.categoryName,
            catDescription: this.state.catDescription,
            fileContent:this.state.fileContent ,


        };
        console.log('category => ' + JSON.stringify(category));
        CategoryService.updateCategory(category, this.state.id).then(res => {
            this.props.history.push('/list-category')
        });

        e.preventDefault();
    }

    changeFileContentHandler = (event) => {
        this.setState({fileContent: event.target.value})
    }

    changeCategoryNameHandler = (event) => {
        this.setState({categoryName: event.target.value})
    }
    changeDescriptionHandler = (event) => {
        this.setState({catDescription: event.target.value})
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
                                        <select className="selectpicker form-control" onChange={this.changeFileContentHandler}>{

                                            this.state.mediaList.map(

                                                media=>
                                                        <option   key={media.mediaId}  value ={media.mediaId}>{media.mediaName}</option>

                                            )
                                        }
                                        </select>

                                    </div>

                                    <div className="form-group">
                                        <label> Category Name </label>
                                        <input placeholder="Category Name" name="categoryName" className="form-control"
                                               value={this.state.categoryName} onChange={this.changeCategoryNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.catDescription} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.editCategory}> Update</button>
                                    <Link to="/list" className="btn btn-danger"
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