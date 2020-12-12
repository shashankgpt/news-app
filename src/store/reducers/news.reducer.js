import * as newsConstant from "../constant/news.constant";

const initialState = {
  totalCount:0,
  newsData:[],
  category:'all',
  selectedNews:{},
  topHeading:{},
  page:0
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case newsConstant.ADD_FAVOURITE_NEWS:
      return state;
    case newsConstant.REMOVE_FAVOURITE_NEWS:
      return state;
    case newsConstant.SAVE_FIRST_NEWS_PAGE: 
    return {
      ...state,
      topHeading:action.payload.articles[0],
      newsData: action.payload.articles, // TODO: data duplicacy in state
      category:action.payload.category,
      totalCount: action.payload.totalResults
    }
    default:
      return state;
  }
}
