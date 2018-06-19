import { SHOW_AUTH_LOGIN, SHOW_AUTH_SIGNUP } from "./type";

export const loginAuthButton = () => ({
  type: SHOW_AUTH_LOGIN,
});

export const signUpButton = () => ({
  type: SHOW_AUTH_SIGNUP,
});
