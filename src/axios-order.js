import axios from 'axios';

 const instance = axios.create({
    baseURL: 'https://react-burger-builder-2c649.firebaseio.com/'
});

export default instance;