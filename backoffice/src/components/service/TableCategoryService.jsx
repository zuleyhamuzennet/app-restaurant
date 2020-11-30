import axios from 'axios';

const TABLE_CATEGORY_API_BASE_URL = "http://localhost:8080/table-category/"

class TableCategoryService{

    addTableCategory(tableCategory){
        return axios.post(TABLE_CATEGORY_API_BASE_URL + 'add',tableCategory,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }
    updateTableCategory(tableCategory){
        return axios.put(TABLE_CATEGORY_API_BASE_URL+'update/',tableCategory,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }


    listAllTableCategory(){
        return axios.get(TABLE_CATEGORY_API_BASE_URL+ 'list',{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }
    getTableCategoryById(id){
        return axios.get(TABLE_CATEGORY_API_BASE_URL + id,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

    updateTableCategory(tableCategory){
        return axios.put(TABLE_CATEGORY_API_BASE_URL+'update/',tableCategory,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

    deleteTableCategory(id){
        return axios.delete(TABLE_CATEGORY_API_BASE_URL+'delete/'+id,{
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
export default new TableCategoryService()