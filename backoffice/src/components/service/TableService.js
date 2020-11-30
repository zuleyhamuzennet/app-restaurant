import axios from 'axios';

const TABLE_API_BASE_URL = "http://localhost:8080/table/"

class TableService{

    addTable(tables,tableCategory){
        return axios.post(TABLE_API_BASE_URL + 'add', tables,{
            params:{
                id:tableCategory
            },
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }

    listAllTable(){
        return axios.get(TABLE_API_BASE_URL+ 'list',{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

    getTableById(id){
        return axios.get(TABLE_API_BASE_URL + id,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

    updateTable(product){
        return axios.put(TABLE_API_BASE_URL+'update/',product,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

    deleteTable(id){
        return axios.delete(TABLE_API_BASE_URL+'delete/'+id,{
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

    getTableCategoryById(id){
        return axios.get("http://localhost:8080/table-category/" + id,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }




}
export default new TableService()