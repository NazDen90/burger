import axios from 'axios'

 const instance =  axios.create({
    baseURL:'https://react-burger-c0d5b.firebaseio.com/'
});


export default instance;

