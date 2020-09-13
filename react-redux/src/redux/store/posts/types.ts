import { Post } from '../../../interfaces';

export interface PostsState {
  posts: Post[];
  fetchedPosts: Post[];
}

export const CREATE_POST = 'POST/CREATE_POST';
export interface CreatePostAction {
  type: typeof CREATE_POST;
  payload: Post['title'] | Post;
}

export const FETCH_POSTS = 'POST/FETCH_POSTS';
export interface FetchPostsAction {
  type: typeof FETCH_POSTS;
  payload: Post[];
}

export type PostsActionTypes = CreatePostAction | FetchPostsAction;
