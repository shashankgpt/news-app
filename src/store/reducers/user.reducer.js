import * as userConstant from "../constant/user.constant";

const initialState = {
  isAuth: false,
  loading: false,
  user: {
    username: "",
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstant.LOG_IN:
      return state;
    case userConstant.LOG_OUT:
      return state;
    default:
      return state;
  }
}
