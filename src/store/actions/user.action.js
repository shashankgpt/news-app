import { signUp, logIn } from "../../Services/http/user.service";
import * as userActions from "../constant/user.constant";

const loadingStart = () => {
  return {
    type: userActions.LOADING_TRUE,
  };
};

const loadingEnd = () => {
  return {
    type: userActions.LOADING_FALSE,
  };
};

const userRegisterSuccess = (data) => {
  return {
    type: userActions.USER_REGISTER_SUCCESS,
    payload: data,
  };
};

const userRegisterFailure = (data) => {
  return {
    type: userActions.USER_REGISTER_FAILURE,
    payload: data,
  };
};

const loginUserSuccess = (data) => {
  return {
    type: userActions.USER_LOGIN_SUCCESS,
    payload: data,
  };
};

const loginUserFailure = (data) => {
  return {
    type: userActions.USER_LOGIN_FAILURE,
    payload: data,
  };
};

export const clearMessage = (data) => {
  return {
    type: userActions.CLEAR_MESSAGE,
    payload: data,
  };
};

export const signUpUser = (username, password) => {
  return (dispatch) => {
    dispatch(loadingStart());
    return signUp(username, password)
      .then((res) => {
        dispatch(userRegisterSuccess(res.data));
      })
      .catch((err) => {
        dispatch(userRegisterFailure(err));
      })
      .finally(() => dispatch(loadingEnd()));
  };
};

export const loginUser = (username, password) => {
  return (dispatch) => {
    dispatch(loadingStart());
    return logIn(username, password)
      .then((res) => {
        dispatch(loginUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(loginUserFailure(err));
      })
      .finally(() => dispatch(loadingEnd()));
  };
};
