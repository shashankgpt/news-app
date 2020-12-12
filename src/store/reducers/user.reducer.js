import * as userConstant from "../constant/user.constant";

const initialState = {
  isLoggedIn: false,
  loading: false,
  username: "",
  error: "",
  success: "",
  profile: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstant.LOADING_TRUE:
      return { ...state, loading: true };
    case userConstant.LOADING_FALSE:
      return { ...state, loading: false };
    case userConstant.CLEAR_MESSAGE:
      return { ...state, loading: false, error:'', success:'' };
    case userConstant.USER_REGISTER_SUCCESS:
      return {
        ...state,
        error: "",
        success: "Successfully Registered the user",
      };
    case userConstant.USER_REGISTER_FAILURE:
      return { ...state, error: "Unable to Register the user", success: "" };
    case userConstant.USER_LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        isLoggedIn: true,
        success: "Successfully logIn the user",
      };
    case userConstant.USER_LOGIN_FAILURE:
      return { ...state, error: "Unable to logIn the user", success: "" };
    default:
      return state;
  }
}
