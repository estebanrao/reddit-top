import { createSelector } from 'reselect';

const selectPostsData = (state) => state.postsData;
const selectConfig = (state) => state.config;

export const selectUserPosts = createSelector(
  [selectPostsData, selectConfig],
  (postsData, config) => {
    return postsData.posts.map((post) => {
      if (config.readPosts.includes(post.data.id)) {
        return {
          ...post,
          data: { ...post.data, unread: false },
        };
      }
      return { ...post, data: { ...post.data, unread: true } };
    });
  }
);

export const selectSelectedPost = createSelector(
  [selectPostsData],
  (postsData) => postsData.selectedPost
);
