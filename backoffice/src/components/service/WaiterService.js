import axios from 'axios';

const WAITER_API_URL = "http://localhost:8080/waiter/";

class WaiterService {

    addWaiter(waiter, username, password) {
        return axios.post(WAITER_API_URL + 'add', waiter, {
            /*  auth:{
                  username:localStorage.getItem("username"),
                  password:localStorage.getItem("password")
              }*/

            auth: {

                username: username,
                password: password
            }


        });
    }

    listAllWaiter(username, password) {
        return axios.get(WAITER_API_URL + 'list', {
           /* auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }*/

                auth:{

                username:username,
                password:password
            }

        });
    }

    updateWaiter(waiter, username, password) {
        return axios.put(WAITER_API_URL + 'update/', waiter, {
            /*  auth:{
                  username:localStorage.getItem("username"),
                  password:localStorage.getItem("password")
              }*/

            auth: {

                username: username,
                password: password
            }

        });
    }

    getWaiterById(id, username, password) {
        return axios.get(WAITER_API_URL + id, {
            /*  auth:{
                  username:localStorage.getItem("username"),
                  password:localStorage.getItem("password")
              }
              */
            auth: {

                username: username,
                password: password
            }

        });
    }

    deleteWaiter(id, username, password) {
        return axios.delete(WAITER_API_URL + id, {
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

export default new WaiterService()