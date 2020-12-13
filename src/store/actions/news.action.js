/* eslint-disable import/prefer-default-export */
import {getTopHeadline} from '../../Services/http/news.service'
import * as newsActions from '../constant/news.constant';
import {newsData } from '../../Services/util/news.util'

const saveNewSuccess = (topHeading, subHeading, allOthers, category, page) => {
 return {
     type: newsActions.FETCH_NEWS_SUCCESS,
     payload: {
         topHeading,
         subHeading,
         allOthers,
         category,
         page
     }
 }   
}

const saveNewFailure = (err) => {
    return {
        type: newsActions.FETCH_NEWS_SUCCESS,
        payload: err
   }
}

export const fetchTopHeadline = (category='all', page =0) => {
    return dispatch => {
        return getTopHeadline(category==='all' ? '': category, page)
        .then((res) => {
            const {  mainHeading,subHeading,otherNews} = newsData(res.data)
            dispatch(saveNewSuccess(mainHeading,subHeading,otherNews,category,page))
        }).catch((err) => {
            dispatch(saveNewFailure(err.message))
        })
    }
}