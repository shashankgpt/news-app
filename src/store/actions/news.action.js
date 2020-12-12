import {getTopHeadline} from '../../Services/http/news.service'
import * as newsActions from '../constant/news.constant';
import { newsData } from '../../Services/util/data.service'

const saveNews = (data) => {
    return {
        type:newsActions.SAVE_FIRST_NEWS_PAGE,
        payload: data
    }
}
export const fetchTopHeadline = (category='all') => {
    return dispatch => {
        return getTopHeadline()
        .then((res) => {
            dispatch(saveNews({...res.data, category }))
        }).catch(() => {
            dispatch(saveNews({...newsData, category }))
        })
    }
}


export const fetchTopHeadline2 = () => {
    return dispatch => {
        return getTopHeadline()
        .then((res) => {
            dispatch(saveNews(res.data))
        })
    }
}
