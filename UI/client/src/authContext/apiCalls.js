import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (users, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", users);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};