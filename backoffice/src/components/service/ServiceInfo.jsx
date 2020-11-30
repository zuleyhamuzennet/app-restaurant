import axios from 'axios';

const INFO_API_BASE_URL = "http://localhost:8080/properties/info";
const INFO_ACTIVE_API_BASE_URL = "http://localhost:8080/properties/active";

class ServiceInfo{

    infoProperties(){
        return axios.get(INFO_API_BASE_URL ,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }
    infoActiveProperties(){
        return axios.get(INFO_ACTIVE_API_BASE_URL ,{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }

}
export default new ServiceInfo();