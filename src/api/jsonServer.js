import axios from 'axios';

export default axios.create({
    baseURL: 'http://4297-77-123-51-187.ngrok.io' //  !!! - after restart server, change !!!
});