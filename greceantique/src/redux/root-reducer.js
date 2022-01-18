import { combineReducers } from 'redux';
import articlesReducer from './articles/articles.reducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
});

export default rootReducer;
