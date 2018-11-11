const state = {
  authenticated: false,
  authInfo: JSON.parse(localStorage.getItem('user')),
  generalError: '',
  auth: {
    loginFormVisibility: false,
    registerFormVisibility: false,
  },
};

export default state;
