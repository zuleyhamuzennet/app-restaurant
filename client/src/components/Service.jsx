import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/product"

class Service{




    listAllProduct(){

        return axios.get(PRODUCT_API_BASE_URL+"/list",{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }
    listAllCategory(){

        return axios.get(PRODUCT_API_BASE_URL+"/category",{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })

    }

    listProductByCategory(categories){
        return axios.get(PRODUCT_API_BASE_URL+"/category/list",{
            params: {
                category: categories
            },
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }

    saleButton(Carts){
        return axios.post("http://localhost:8080/carts/add",Carts,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }



}
export default new Service()