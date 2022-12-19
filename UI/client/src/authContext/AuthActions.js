export const loginStart = () => ({
    type: "LOGIN_START",
  });
  export const loginSuccess = (users) => ({
    type: "LOGIN_SUCCESS",
    payload: users,
  });
  export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
  });
  
  //logout
  
  export const logout = () => ({
    type: "LOGOUT",
  });