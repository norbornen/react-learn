import { Action } from 'redux';
import { fetchPosts } from './actions';
import { PostsState } from './types';
import { ThunkAction } from 'redux-thunk'
import { Post } from '../../../interfaces';
import { hideLoader, showLoader } from '../app/actions';
import { showErrorAlert } from '../alert/actions';

export const thunkFetchPosts = (): ThunkAction<void, PostsState, unknown, Action<string>> => async (dispatch) => {
  dispatch(
    showLoader()
  );

  try {
    const posts = await fetchPostsAPI();
    dispatch(
      fetchPosts(posts)
    );
  } catch (err) {
    dispatch(showErrorAlert(err.message))
  }

  dispatch(
    hideLoader()
  );
}

async function fetchPostsAPI(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?__limit=5');
  const data: Post[] = await response.json();
  return data || [];
}
