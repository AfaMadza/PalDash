import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://paldash-1155.firebaseio.com/'
});

export default instance;