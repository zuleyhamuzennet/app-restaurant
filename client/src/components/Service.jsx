import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/product/"
const CATEGORY_API_BASE_URL = "http://localhost:8080/categories/"

class Service{




    listAllProduct(){

        return axios.get(PRODUCT_API_BASE_URL+"list",{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }
    listProductById(id){

        return axios.get(PRODUCT_API_BASE_URL+"list",{
            params:{
                categoryId:id
            },
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }
    listAllCategory(){

        return axios.get(CATEGORY_API_BASE_URL+"list",{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })

    }
    listAllTableCategory(){

        return axios.get("http://localhost:8080/table-category/list",{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })

    }
    listAllTables(){

        return axios.get("http://localhost:8080/table/list",{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })

    }
    listTableById(id){
        return axios.get("http://localhost:8080/table/"+id,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }
    listTableByCategory(id){
        return axios.get("http://localhost:8080/table-category/"+id,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }

    listProductByCategory(id){
        return axios.get(CATEGORY_API_BASE_URL,{
            params:{
                id:id
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