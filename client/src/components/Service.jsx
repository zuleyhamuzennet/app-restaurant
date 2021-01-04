import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/product/"
const CATEGORY_API_BASE_URL = "http://localhost:8080/categories/"

class Service{


    listProductsByCategoryId(id,username,password){
        return axios.get(CATEGORY_API_BASE_URL+"list/"+id,{
             auth:{
              username:password,
              password:username
          }
        });
    }
    getScrollProductList(id,username,password,page,size){
        return axios.get("http://localhost:8080/product/searchC/"+id,{
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
    listAllCategory(username,password){

        return axios.get(CATEGORY_API_BASE_URL+"list",{
             auth:{
              username:password,
              password:username
          }
        })
    }
    listAllTableCategory(username,password){

        return axios.get("http://localhost:8080/table-category/list",{
            auth:{
                username:password,
                password:username
            }
        })
    }

    listTableByCategory(id,username,password){
        return axios.get("http://localhost:8080/table-category/"+id,{
             auth:{
              username:password,
              password:username
          }

        })
    }

    listProductByCategory(id,username,password){
        return axios.get(PRODUCT_API_BASE_URL+id,{
             auth:{
              username:password,
              password:username
          }
        })
    }
    listAllWaiters(username,password){
        return axios.get("http://localhost:8080/waiter/list",{
             auth:{
              username:password,
              password:username
          }
        })
    }
    getWaiterById(id,username,password){
        return axios.get("http://localhost:8080/waiter/"+id,{
             auth:{
              username:password,
              password:username
          }

        });
    }

    saleButton(order,username,password){
        return axios.post("http://localhost:8080/carts/add",order,{
             auth:{
              username:password,
              password:username
          }
        })
    }

    listAllMedia(username,password){
        return axios.get("http://localhost:8080/media/list" ,{
            auth:{
                username:username,
                password:password
            }
        })
    }
}
export default new Service()