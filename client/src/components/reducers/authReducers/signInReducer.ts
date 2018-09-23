import { signInTypes } from "../../actions/authActions/signInTypes";
import { ISignInState } from "..";

const initialState: ISignInState = {
  password: "",
  username: "",
  errorMessage: ""
};

export const signInReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case signInTypes.SHOW_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      };
    case signInTypes.SEND_PASSWORD:
      return {
        ...state,
        password: action.payload.password
      };
    case signInTypes.SEND_USERNAME:
      return {
        ...state,
        username: action.payload.username
      };
  }

  return state;
};
