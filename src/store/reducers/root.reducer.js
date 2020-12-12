import {combineReducers} from 'redux';
import user from './user.reducer';
import news from './news.reducer';

const rootReducer = combineReducers({
    user,
    news
});

export default rootReducer;