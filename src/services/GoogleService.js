import axios from 'axios';

const GOOGLE_NEWS_API_TOKEN = "";

export function getGoogleNews(){
    return axios.get(`http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${GOOGLE_NEWS_API_TOKEN}`);
}

