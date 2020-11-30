import axios from 'axios';

const CATEGORY_API_BASE_URL = "http://localhost:8080/categories/"

class CategoryService{

    addCategory(category){
        return axios.post(CATEGORY_API_BASE_URL + 'add',category,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }
    updateCategory(category){
        return axios.put(CATEGORY_API_BASE_URL+'update/',category,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }


    listAllCategories(){
        return axios.get(CATEGORY_API_BASE_URL+ 'list',{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }
    save(Carts){
        return axios.post("http://localhost:8080/carts/add",Carts,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }

    getCategoryById(id){
        return axios.get(CATEGORY_API_BASE_URL + id,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

    updateCategory(category){
        return axios.put(CATEGORY_API_BASE_URL+'update/',category,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

    deleteCategory(id){
        return axios.delete(CATEGORY_API_BASE_URL+'delete/'+id,{
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




}
export default new CategoryService()