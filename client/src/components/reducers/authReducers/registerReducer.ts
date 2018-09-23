import { registerTypes } from "../../actions/authActions/registerTypes";
import { IRegisterState } from "..";

const initialState: IRegisterState = {
  username: "",
  password: "",
  email: "",
  avatar: "",
  errorMessage: ""
};

export const registerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case registerTypes.SEND_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      };
    case registerTypes.NEW_USERNAME:
      return {
        ...state,
        username: action.payload.username
      };
    case registerTypes.NEW_PASSWORD:
      return {
        ...state,
        password: action.payload.password
      };
    case registerTypes.NEW_EMAIL:
      return {
        ...state,
        email: action.payload.email
      };
    case registerTypes.NEW_AVATAR:
      return {
        ...state,
        avatar: action.payload.avatar
      };
  }
  return state;
};
