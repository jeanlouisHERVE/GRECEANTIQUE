import ARTICLES_DATA from './articles.data';

const INITIAL_STATE = {
  articlesByCategories: ARTICLES_DATA,
};

const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default articlesReducer;