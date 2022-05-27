 
import axios from 'axios'; 

class ApiServices {
  GetAllData = () => {    
    return axios
    .get("https://randomuser.me/api/")
    .then(data =>  data.data.results)
    .catch(error => console.log(error));
    };
  }; 



export default new ApiServices();
