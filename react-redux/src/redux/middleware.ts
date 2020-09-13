import { Action, Middleware } from "redux";
import { showWarningAlert } from "./store/alert/actions";
import { CREATE_POST } from "./store/posts/types";

const forbidden = ['fuck', 'php'];

const forbiddenWordsMiddleware: Middleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === CREATE_POST) {
        if (forbidden.some((x) => action.payload.title.includes(x))) {
          return dispatch(showWarningAlert('Низя матюгаться!!!'));
        }
      }
      console.log(action);
      return next(action);
    };
  };
};

export default forbiddenWordsMiddleware;
