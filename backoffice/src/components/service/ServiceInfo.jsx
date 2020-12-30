import axios from 'axios';

const INFO_API_BASE_URL = "http://localhost:8080/properties/";
const INFO_ACTIVE_API_BASE_URL = "http://localhost:8080/properties/active";

class ServiceInfo{

    infoProperties(username,password){
        return axios.get(INFO_API_BASE_URL +"info",{
            auth:{

                username:username,
                password:password
            }
        })
    }
    getBeans(username,password){
        return axios.get(INFO_API_BASE_URL+"all" ,{
            auth:{

                username:username,
                password:password
            }
        })
    }


}
export default new ServiceInfo();