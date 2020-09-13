import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { hideAlert } from "../redux/store/alert/actions";
import { AlertState } from "../redux/store/alert/types";

const Alert: React.FC = () => {
  const dispatch = useDispatch();
  const { visible, css_class, text } = useSelector<RootState, AlertState>((state) => state.alert);

  if (!visible) {
    return <></>;
  }

  return (
    <div className={`alert alert-${css_class} alert-dismissible fade show`} role="alert">
      {text}
      <button type="button" className="close" onClick={() => dispatch(hideAlert())} data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
