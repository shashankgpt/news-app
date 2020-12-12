import { signUp, logIn, getProfile, updateProfile } from "../../Services/http/user.service";
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

const fetchUserSuccess = (data) => {
  return {
    type: userActions.FETCH_USER_SUCCESS,
    payload: data,
  };
};

const updateUserSuccess = (data) => {
  return {
    type: userActions.UPDATE_USER_SUCCESS,
    payload: data,
  };
};

const fetchUserFailure = (data) => {
  return {
    type: userActions.FETCH_USER_FAILURE,
    payload: data,
  };
};
export const clearMessage = (data) => {
  return {
    type: userActions.CLEAR_MESSAGE,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: userActions.LOGOUT
  };
};
export const saveUserDetails = (data) => {
  return {
    type: userActions.SAVE_USER,
    payload: data
  }
}

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
        console.log(res.data);
        dispatch(loginUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(loginUserFailure(err));
      })
      .finally(() => dispatch(loadingEnd()));
  };
};


export const getUserInfo = (username, password) => {
  return (dispatch) => {
    dispatch(loadingStart());
    return getProfile(username, password)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUserFailure(err));
      })
      .finally(() => dispatch(loadingEnd()));
  };
};

export const saveUserProfile =(data) => {
  return (dispatch) => {
    dispatch(loadingStart());
    return updateProfile(data)
      .then((res) => {
        console.log(res.data);
        dispatch(updateUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUserFailure(err));
      })
      .finally(() => dispatch(loadingEnd()));
  };
}