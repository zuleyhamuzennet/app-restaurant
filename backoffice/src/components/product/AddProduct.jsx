import React, {Component} from 'react';
import ProductService from "../service/ProductService";
import CategoryService from "../service/CategoryService";
import Header from "../Header";
import {Link} from "react-router-dom";
import ContextUser from "../ContextUser";
import Loading from "../Loading";
import MediaService from "../service/MediaService";

class AddProduct extends Component {
    static contextType=ContextUser;

    constructor(props) {
        super(props)

        this.state = {
            productName: '',
            description: '',
            price: '',
            categories: [],
            multiSelect:[],
            mediaList: [],
            mediaId:'',
            media:{},


        }

        this.saveProduct = this.saveProduct.bind(this);
        this.changeMultiSelect=this.changeMultiSelect.bind(this);
        this.getFiles = this.getFiles.bind(this);
    }


    saveProduct = (e) => {
        e.preventDefault();
        const {username,password}=this.context;
        let products = {
            productName: this.state.productName,
            description: this.state.description,
            price: this.state.price,
            categoryListId:this.state.multiSelect,
            media:this.state.media
        };
        console.log('products => ' + JSON.stringify(products));

        ProductService.addProduct(products,username,password).then(res => {
            this.props.history.push('/list');
        });

    }
    changeMediaHandler=(event)=>{
        this.setState({mediaId:event.target.value});
        console.log(this.state.mediaId);

        const valueMedia = this.state.mediaList.filter(item => item.id == this.state.mediaId)
        this.setState({media: valueMedia[0]})


    }

    componentDidMount() {
      //  this.setState({loadingVisible:true})
        const {username,password}=this.context;
        console.log(username);

        CategoryService.listAllCategories(username,password).then((res) => {
            this.setState({categories: res.data,loadingVisible:false});
        });

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


    changeMultiSelect(id){
        if(this.state.multiSelect.includes(id)!==true){
            this.state.multiSelect.push(id);
            console.log("multiselect=> ekle",this.state.multiSelect)
        }else{
            for(let i = 0; i<this.state.multiSelect.length;i++){
                if(id === this.state.multiSelect[i]){
                    this.state.multiSelect.splice(i,1);
                    console.log("multiselect= sil",this.state.multiSelect)
                }
            }
    }}

    render() {
        console.log(this.state.categories);
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Product</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Category </label>


                                            <div className="checkbox" style={{height:"4rem",overflow:"auto"}}>
                                                {
                                                    this.state.categories.map(
                                                        category=>
                                                            <div className="row col-md -12" key={category.id}>
                                                                <label><input type="checkbox" value="" onClick={()=>this.changeMultiSelect(category.id)}/>{category.categoryName}</label>
                                                            </div>
                                                    )
                                                }
                                            </div>

                                    </div>
                                    <div className="form-group">
                                        <label> Product Name </label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                               value={this.state.productName} onChange={(event)=>{this.setState({productName:event.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.description} onChange={(e)=>{this.setState({description:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Price </label>
                                        <input placeholder="Price" name="price" className="form-control"
                                               value={this.state.price} onChange={(e)=>{this.setState({price:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Media </label>
                                        <select id="option" className="selectpicker form-control" onChange={this.changeMediaHandler}>
                                            {

                                                this.state.mediaList.map(

                                                    media=>

                                                        <option   key={media.id}  value ={media.id}>{media.mediaName}
                                                            <br/>
                                                            <img src={'data:image/png;base64,' + media.id.fileContent} width="40" style={{margin: 3}}/>
                                                        </option>


                                                )
                                            }
                                        </select>

                                    </div>

                                    <button type="button" className="btn btn-primary"data-toggle="modal"
                                            data-target="#exampleModal">
                                        show
                                    </button>
                                    <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
                                    <Link to="/list" className="btn btn-danger"
                                          style={{marginLeft: "10px"}}>Cancel
                                    </Link>
                                </form>
                                <div className="modal" id="exampleModal" tabindex="-1" role="dialog">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">

                                                <img src={'data:image/png;base64,' +this.state.mediaId.fileContent} width="40"
                                                     style={{margin: 3}}/>

                                            </div>
                                        </div>
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


export default AddProduct;
