import { signInTypes } from "./signInTypes";

export const updatePassword = (password: string) => {
  return {
    payload: {
      password
    },
    type: signInTypes.SEND_PASSWORD
  };
};

export const updateUsername = (username: string) => {
  return {
    payload: {
      username
    },
    type: signInTypes.SEND_USERNAME
  };
};

export const updateError = (errorMessage: string) => {
  return {
    payload: {
      errorMessage
    },
    type: signInTypes.SHOW_ERROR
  };
};
