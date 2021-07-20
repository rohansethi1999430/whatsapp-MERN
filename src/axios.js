import axios from 'axios'

const instance = axios.create({
    baseURL:'https://whatapp-backend.herokuapp.com'
    
});
export default instance;