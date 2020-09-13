import { Post } from '../../../interfaces';
import { PostsState, PostsActionTypes, CREATE_POST, FETCH_POSTS } from './types';

const initialState: PostsState = {
  posts: [],
  fetchedPosts: []
};

export function postsReducer(state = initialState, action: PostsActionTypes): PostsState {
  switch (action.type) {
    case CREATE_POST:
      let newPost: Post;
      if (typeof action.payload === 'string') {
        newPost = { id: Date.now().toString(), title: action.payload };
      } else {
        newPost = action.payload;
      }
      return { ...state, posts: state.posts.concat([ newPost ]) };
    case FETCH_POSTS:
      return { ...state, fetchedPosts: action.payload };
    default:
      return state;
  }
}
