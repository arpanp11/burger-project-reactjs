import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-project-react-90ef5.firebaseio.com/'
});

export default instance;
