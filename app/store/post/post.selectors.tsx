import store from "../store";

export type RootState = ReturnType<typeof store.getState>;

// Selector to get the recently viewed posts from the state
export const selectRecentlyViewedPosts = (state: RootState) =>
  state.posts.posts;
