import axios from 'axios';

const WAITER_API_URL="http://localhost:8080/waiter/";

class WaiterService{

    addWaiter(waiter){
        return axios.post(WAITER_API_URL+'add',waiter,{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }

        });
    }
    listAllWaiter(){
        return axios.get(WAITER_API_URL+'list',{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }
    updateWaiter(waiter){
        return axios.put(WAITER_API_URL+'update/',waiter,{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }
    getWaiterById(id){
        return axios.get(WAITER_API_URL+id,{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }
    deleteWaiter(id){
        return axios.delete(WAITER_API_URL+id,{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }

}
export default new WaiterService()