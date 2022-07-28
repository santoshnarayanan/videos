import axios from "axios";
const KEY = 'AIzaSyDnfIpNSNhIk7qSKXLVGrBESBdeQq5Raqw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults:5,
        key:KEY
    }
});

