import axios from 'axios';

const TABLE_CATEGORY_API_BASE_URL = "http://localhost:8080/table-category/"

class TableCategoryService {

    addTableCategory(tableCategory, username, password) {
        return axios.post(TABLE_CATEGORY_API_BASE_URL + 'add', tableCategory, {
            /*  auth:{

                  username:localStorage.getItem("username"),
                  password:localStorage.getItem("password")
              }*/

            auth: {

                username: username,
                password: password
            }

        })
    }


    listAllTableCategory(username, password) {
        return axios.get(TABLE_CATEGORY_API_BASE_URL + 'list', {
            /* auth:{

                 username:localStorage.getItem("username"),
                 password:localStorage.getItem("password")
             }*/

            auth: {

                username: username,
                password: password
            }

        });
    }

    getTableCategoryById(id, username, password) {
        return axios.get(TABLE_CATEGORY_API_BASE_URL + id, {
            /* auth:{

                 username:localStorage.getItem("username"),
                 password:localStorage.getItem("password")
             }*/

            auth: {

                username: username,
                password: password
            }

        });
    }

    updateTableCategory(tableCategory, username, password) {
        return axios.put(TABLE_CATEGORY_API_BASE_URL + 'update/', tableCategory, {
            /* auth:{

                 username:localStorage.getItem("username"),
                 password:localStorage.getItem("password")
             }*/

            auth: {

                username: username,
                password: password
            }

        });
    }

    deleteTableCategory(id, username, password) {
        return axios.delete(TABLE_CATEGORY_API_BASE_URL + 'delete/' + id, {
            /* auth:{

                 username:localStorage.getItem("username"),
                 password:localStorage.getItem("password")
             }*/

            auth: {

                username: username,
                password: password
            }

        });
    }

}

export default new TableCategoryService()