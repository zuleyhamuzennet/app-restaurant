import axios from 'axios';

const CATEGORY_API_BASE_URL = "http://localhost:8080/categories/"

class CategoryService {

    addCategory(category, username, password) {
        return axios.post(CATEGORY_API_BASE_URL + 'add', category, {

            auth: {
                username: username,
                password: password
            }
        })
    }

    updateCategory(category, username, password) {
        return axios.put(CATEGORY_API_BASE_URL + 'update/', category, {
            auth: {
                username: username,
                password: password
            }
        });
    }


    listAllCategories(username, password) {
        return axios.get(CATEGORY_API_BASE_URL + 'list', {
            auth: {
                username: username,
                password: password
            }
        });
    }

    getCategoryById(id, username, password) {
        return axios.get(CATEGORY_API_BASE_URL + id, {
            auth: {

                username: username,
                password: password
            }

        });
    }

    deleteCategory(id, username, password) {
        return axios.delete(CATEGORY_API_BASE_URL + 'delete/' + id, {
            auth: {

                username: username,
                password: password
            }
        });
    }

}

export default new CategoryService()