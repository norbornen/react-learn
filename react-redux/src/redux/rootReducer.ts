import { combineReducers } from "redux";
import { postsReducer } from "./store/posts/reducers";
import { appReducer } from "./store/app/reducers";
import { alertReducer } from "./store/alert/reducers";


export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
  alert: alertReducer
});

export type RootState = ReturnType<typeof rootReducer>;
