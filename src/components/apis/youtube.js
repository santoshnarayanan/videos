import axios from "axios";
const KEY = 'AIzaSyALcGCQX706YmdcLSLa9HV9XSJfl8BO808';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults:5,
        key:KEY
    }
});

