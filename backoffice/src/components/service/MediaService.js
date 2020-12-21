import axios from 'axios';

const MEDIA_API_BASE_URL = "http://localhost:8080/media/";

class MediaService{

    listAllMedia(username,password){
        return axios.get(MEDIA_API_BASE_URL +"list",{
            auth:{

                username:username,
                password:password
            }
        })
    }

}
export default new MediaService();