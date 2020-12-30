import axios from 'axios';

const CUSTOMER_API_URL = "http://localhost:8080/customer/";

class CustomerService {

    addCustomer(customer, username, password) {
        return axios.post(CUSTOMER_API_URL, customer, {
            auth: {

                username: username,
                password: password
            }


        });
    }

    listAllCustomer(username, password,page,size) {
        return axios.get(CUSTOMER_API_URL + 'list', {
            params:{
              page:page,
              size:size
            },
            auth:{

                username:username,
                password:password
            }

        });
    }
    getCustomerByName(username, password,page,size,name) {
        return axios.get(CUSTOMER_API_URL + 'search',{
            params:{
                page:page,
                size:size,
                name:name
            },
            auth:{

                username:username,
                password:password
            }

        });
    }
    updateCustomer(customer, username, password,page,size) {
        return axios.put(CUSTOMER_API_URL ,customer, {
            params:{
                page:page,
                size:size
            },
            auth: {

                username: username,
                password: password
            }

        });
    }

    getCustomerById(id, username, password) {
        return axios.get(CUSTOMER_API_URL + id, {
            auth: {

                username: username,
                password: password
            }

        });
    }

    deleteCustomer(id, username, password) {
        return axios.delete(CUSTOMER_API_URL + id, {

            auth: {

                username: username,
                password: password
            }

        });
    }

}

export default new CustomerService()