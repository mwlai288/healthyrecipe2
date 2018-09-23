import { registerTypes } from "./registerTypes";

export const registerUsername = (username: string) => {
  return {
    payload: {
      username
    },
    type: registerTypes.NEW_USERNAME
  };
};
export const registerPassword = (password: string) => {
  return {
    payload: {
      password
    },
    type: registerTypes.NEW_PASSWORD
  };
};
export const registerEmail = (email: string) => {
  return {
    payload: {
      email
    },
    type: registerTypes.NEW_EMAIL
  };
};
export const registerAvatar = (avatar: string) => {
  return {
    payload: {
      avatar
    },
    type: registerTypes.NEW_AVATAR
  };
};

export const updateError = (errorMessage: string) => {
  return {
    payload: {
      errorMessage
    },
    type: registerTypes.SEND_ERROR
  };
};
