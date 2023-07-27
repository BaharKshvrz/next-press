import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RecentlyViewedState } from "./post.types";
import { PostProps } from "@/types";

const initialState: RecentlyViewedState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addToRecentlyViewed: (state, action: PayloadAction<PostProps>) => {
       // Check if the post already exists in the state
       const existingPostIndex = state.posts.findIndex(post => post.id === action.payload.id);
       // If it does, remove it to avoid duplication
       if (existingPostIndex !== -1) {
         state.posts.splice(existingPostIndex, 1);
       }
       // Add the post to the beginning of the array
       state.posts.unshift(action.payload);
       // Keep only the latest 8 viewed posts
       state.posts = state.posts.slice(0, 8);
    },
  },
});

export const { 
               addToRecentlyViewed,
              } = postsSlice.actions;