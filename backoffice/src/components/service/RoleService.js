import axios from 'axios';

const ROLE_API_BASE_URL ="http://localhost:8080/roles/";

class RoleService{

    listAllRole(username,password){
        return axios.get(ROLE_API_BASE_URL+"list",{
            auth:{

                username:username,
                password:password
            }
        });
    }
    addRole(role,username,password){
        return axios.post(ROLE_API_BASE_URL+"add",role,{
            auth:{

                username:username,
                password:password
            }
        });
    }


}
export default new RoleService;