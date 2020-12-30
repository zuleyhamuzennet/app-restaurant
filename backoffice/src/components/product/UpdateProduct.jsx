import '../../App.css'
import React, {Component} from 'react';
import ProductService from "../service/ProductService";
import Header from "../Header";
import {Link} from "react-router-dom";
import Loading from "../Loading";
import CategoryService from "../service/CategoryService";
import MediaService from "../service/MediaService";
import {AuthContext} from "../contexts/AuthContext";

class UpdateProduct extends Component {
    static contextType=AuthContext;

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.history.location.state?.id,
            productName: '',
            description: '',
            price: '',
            categories:[] ,
            multiSelect:[],
            mediaList: [],
            mediaId:'',
            media:{}
        }
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

    componentDidMount() {
        const user = this.context;
        this.setState({loadingVisible:true});
        ProductService.getProductById(this.state.id,user.username,user.password).then((res) => {

            this.setState({
                id: res.data.id,
                productName: res.data.productName,
                description: res.data.description,
                price:res.data.price,
                categoryListId:this.state.multiSelect,
                media:this.state.media,
                loadingVisible:false
            });
        });

        CategoryService.listAllCategories(user.username,user.password).then((res) => {
            this.setState({categories: res.data});
        });
        MediaService.listAllMedia(user.username,user.password).then((res) => {
            this.setState({mediaList: res.data,loadingVisible:false})
        })
    }

    changeMediaHandler=(event)=>{
        this.setState({mediaId:event.target.value});
        console.log(this.state.mediaId);
        const valueMedia = this.state.mediaList.filter(item => item.id == this.state.mediaId)
        this.setState({media: valueMedia[0]})
    }

    updateProduct = (e) => {
        e.preventDefault();
        const user = this.context;
        let product = {
            id:this.state.id,
            productName: this.state.productName,
            description: this.state.description,
            price: this.state.price,
            categoryListId:this.state.multiSelect,
            media:this.state.media
        };
        console.log('Product => ' + JSON.stringify(product));
        ProductService.updateProduct(product,user.username,user.password).then(res => {
            this.props.history.push('/list')
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Product</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Category </label>
                                        <div className="checkbox" style={{height:"4rem",overflow:"auto"}}>
                                            {
                                                this.state.categories.map(
                                                    category=>
                                                        <div className="row col-md -12" key={category.categoryId}>
                                                            <label><input type="checkbox" value="" onClick={()=>this.changeMultiSelect(category.categoryId)}/>{category.categoryName}</label>
                                                        </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label> Product Name </label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                               value={this.state.productName} onChange={(e)=>{this.setState({productName:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.description} onChange={(e)=>{this.setState({description:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Price </label>
                                        <input placeholder="Product Price" name="price" className="form-control"
                                               value={this.state.price} onChange={(e)=>{this.setState({price:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Media </label>
                                        <select className="selectpicker form-control" onChange={this.changeMediaHandler}>
                                            {
                                                this.state.mediaList.map(
                                                    media=>
                                                        <option   key={media.id}  value ={media.id}>{media.mediaName}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateProduct}> Update</button>
                                    <Link to="/list" className="btn btn-danger"
                                            style={{marginLeft: "10px"}}>Cancel
                                    </Link>
                                </form>
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

export default UpdateProduct;