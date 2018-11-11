const getters = {
    loginFormVisibility: state => state.auth.loginFormVisibility,
    registerFormVisibility: state => state.auth.registerFormVisibility,
    authInfo: state => state.authInfo,
  };
  
  export default getters;
  