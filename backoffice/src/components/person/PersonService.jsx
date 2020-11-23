import axios from 'axios';

const PERSON_API_BASE_URL="http://localhost:8080/users/";
class PersonService{

      getPersons(){
          return axios.get(PERSON_API_BASE_URL+'list',{
              auth:{

                  username:localStorage.getItem("username"),
                  password:localStorage.getItem("password")
              }
          });
      }
      addPerson(person){
          return axios.post(PERSON_API_BASE_URL+'add/', person,{
              auth:{
                  username:localStorage.getItem("username"),
                  password:localStorage.getItem("password")
              }
          });
      }
      getPersonById(personId){
          return axios.get(PERSON_API_BASE_URL+personId,{
              auth:{
                  username:localStorage.getItem("username"),
                  password:localStorage.getItem("password")
              }
          });
      }
      updatePerson(person,personId){
          return axios.put(PERSON_API_BASE_URL+ 'update/'+personId,person ,{
              auth:{
                  username:localStorage.getItem("username"),
                  password:localStorage.getItem("password")
              }
          })
      }

    deletePerson(id){
        return axios.delete(PERSON_API_BASE_URL+'delete/'+id,{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        });
    }
}
export default new PersonService()