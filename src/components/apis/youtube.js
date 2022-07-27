import axios from "axios";
const KEY = 'AIzaSyC5qY9UG06_CJ4RnZoA_10AaG7_vgu8ZPQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults:5,
        key:KEY
    }
});

