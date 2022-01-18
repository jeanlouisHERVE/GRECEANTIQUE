import { createSelector } from 'reselect';

const selectArticles = (state) => state.articles;

export const selectArticlesByCategories = createSelector(
  [selectArticles],
  (articles) => articles.articlesByCategories,
);

// export const selectCollectionsForPreview = createSelector(
//   [selectGravuresCollections],
//   (gravuresCollections) => Object.keys(gravuresCollections).map((key) => gravuresCollections[key]),
// );

export const selectCategories = (categoryUrlParam) => createSelector(
  [selectArticlesByCategories],
  (articlesByCategories) => articlesByCategories[categoryUrlParam],
);
