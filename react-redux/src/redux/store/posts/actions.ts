import { Post } from '../../../interfaces'
import { CREATE_POST, CreatePostAction, FETCH_POSTS, FetchPostsAction } from './types'

export function createPost(post: string | Post): CreatePostAction {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function fetchPosts(posts: Post[]): FetchPostsAction {
  return {
    type: FETCH_POSTS,
    payload: posts
  };
}
