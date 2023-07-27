import {combineReducers} from 'redux';
import { postsSlice } from './post/post.slice';

export const rootReducer = combineReducers({
    posts: postsSlice.reducer,
});