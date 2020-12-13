import * as newsConstant from "../constant/news.constant";

const initialState = {
  totalCount:0,
  category:'all',
  topHeading:{},
  subHeadingNews: [],
  otherNews:[],
  page:0
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case newsConstant.FETCH_NEWS_SUCCESS:
      return {...state, 
      topHeading: action.payload.topHeading,
      subHeadingNews: action.payload.subHeading,
      otherNews: action.payload.allOthers,
      category: action.payload.category,
      page: action.payload.page,
      totalCount: action.payload.total
      };
    case newsConstant.FETCH_NEWS_FAILURE:
      return state;
    default:
      return state;
  }
}
