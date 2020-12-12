import axios from 'axios';

const URL = 'http://newsapi.org/v2'

export const getNewsHeadline = () => {
  
    const url = new URLSearchParams('');
    url.set("country", "us"); 
    url.set("apiKey", "a29b6151b1504b838a24c9c945e5838b"); 
    axios.get(`http://newsapi.org/v2/top-headlines?${url.toString()}`).then((res)=> console.log(res));
}
const getParams = (category='', page=0, searchKey='', pageSize=10, country ='us') => {
    const urlParam = new URLSearchParams('');
    urlParam.set("country", country); 
    urlParam.set("pageSize", pageSize)
    urlParam.set("apiKey", "a29b6151b1504b838a24c9c945e5838b")
    urlParam.set('page',page);
    if(searchKey) urlParam.set('q',searchKey)
    if(category) urlParam.set('category',category) 
    return urlParam;
}
export const getTopHeadline = (category='', page=0, searchKey='', pageSize=10, country ='us') => {
    const urlParam =getParams(category, page, searchKey, pageSize, country);
    return axios.get(`${URL}/top-headlines?${urlParam.toString()}`);
}
