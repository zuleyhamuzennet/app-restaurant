import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/product/"

class ProductService{

    addProduct(product,username,password){
        return axios.post(PRODUCT_API_BASE_URL + 'add', product,{
            auth:{

                username:username,
                password:password
            }
        })
    }

    listAllProduct(username,password){
        return axios.get(PRODUCT_API_BASE_URL+ 'list',{
              auth:{
                username:username,
                password:password
            }
        });
    }

    getProductById(id,username,password){
        return axios.get(PRODUCT_API_BASE_URL + id,{
     auth:{
           username:username,
           password:password
       }
        });
    }

    updateProduct(product,username,password){
        return axios.put(PRODUCT_API_BASE_URL+'update/',product,{
              auth:{
           username:username,
           password:password
       }
        });
    }

    deleteProduct(id,username,password){
        return axios.delete(PRODUCT_API_BASE_URL+'delete/'+id,{
            auth:{

                username:username,
                password:password
            }
        });
    }


    getSales(username,password){
        return axios.get("http://localhost:8080/carts/list",{
                   auth:{

                username:username,
                password:password
            }

        })
    }

    getCategoryById(id,username,password){
        return axios.get("http://localhost:8080/categories/" + id,{
            auth:{

                username:username,
                password:password
            }
        });
    }
    getPageProductList(username,password,page,size){

        return axios.get(PRODUCT_API_BASE_URL+"search/",{
            params: {
                page: page,
                size: size
            },
            auth:{
                username:password,
                password:username
            }
        });
    }
}
export default new ProductService()