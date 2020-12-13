import axios from 'axios';
import { token } from '../../constant/News';

const URL = 'http://newsapi.org/v2'

export const getNewsHeadline = () => {
  
}
const getParams = (category='', page=0, searchKey='', pageSize=10, country ='us') => {
    const urlParam = new URLSearchParams('');
    urlParam.set("country", country); 
    urlParam.set("pageSize", pageSize)
    urlParam.set("apiKey",token)
    urlParam.set('page',page);
    if(searchKey) urlParam.set('q',searchKey)
    if(category) urlParam.set('category',category) 
    return urlParam;
}
export const getTopHeadline = (category='', page=0, searchKey='', pageSize=10, country ='us') => {
    const urlParam =getParams(category, page, searchKey, pageSize, country);
    return axios.get(`${URL}/top-headlines?${urlParam.toString()}`);
}
