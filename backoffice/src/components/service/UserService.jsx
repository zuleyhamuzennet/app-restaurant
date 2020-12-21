import axios from 'axios';

const PERSON_API_BASE_URL = "http://localhost:8080/users/";

class UserService {

    getPersons(username, password) {
        return axios.get(PERSON_API_BASE_URL + 'list', {
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

    addPerson(person, username, password) {
        return axios.post(PERSON_API_BASE_URL + 'add/', person, {
            /*auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }*/

            auth: {

                username: username,
                password: password
            }

        });
    }

    getPersonById(id, username, password) {
        return axios.get(PERSON_API_BASE_URL + id, {
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

    updatePerson(person, username, password) {
        return axios.put(PERSON_API_BASE_URL + 'update/', person, {
            /*  auth:{
                  username:localStorage.getItem("username"),
                  password:localStorage.getItem("password")
              }
              */
            auth: {

                username: username,
                password: password
            }

        })
    }

    deletePerson(id, username, password) {
        return axios.delete(PERSON_API_BASE_URL + 'delete/' + id, {
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
}

export default new UserService()