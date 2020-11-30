import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/product/"

class ProductService{

    addProduct(product,category){
        return axios.post(PRODUCT_API_BASE_URL + 'add', product,{
            params:{
                id:category
            },
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }

    listAllProduct(){
        return axios.get(PRODUCT_API_BASE_URL+ 'list',{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

    getProductById(id){
        return axios.get(PRODUCT_API_BASE_URL + id,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

    updateProduct(product){
        return axios.put(PRODUCT_API_BASE_URL+'update/',product,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

    deleteProduct(id){
        return axios.delete(PRODUCT_API_BASE_URL+'delete/'+id,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

    getSales(){
        return axios.get("http://localhost:8080/carts/list",{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }

    getCategoryById(id){
        return axios.get("http://localhost:8080/categories/" + id,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }




}
export default new ProductService()