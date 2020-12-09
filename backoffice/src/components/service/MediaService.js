import axios from 'axios';

const MEDIA_API_BASE_URL = "http://localhost:8080/media/";

class MediaService{

    addMedia(data){
        return axios.post(MEDIA_API_BASE_URL +"add",{
            data:{
                file:data,
                imageName:data.imageName
            },
            auth:{

                body:data,
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }
    listAllMedia(){
        return axios.get(MEDIA_API_BASE_URL +"list",{
            auth:{

                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
    }

}
export default new MediaService();