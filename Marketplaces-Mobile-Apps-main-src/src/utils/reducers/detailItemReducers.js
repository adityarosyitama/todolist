const initialState = {
      idItem: [],

    isLoggedIn: false,
  };
  
  const detailItemReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ID':
        return {
          ...state,
          isLoggedIn: true,
          loginData: action.data,
        };
      case 'RESET_ID':
        return {
          ...state,
          loginData: {
            idItem: [],
          },
          isLoggedIn: false,
        };
      case 'LOGIN':
        return {
          ...state,
  
          isLoggedIn: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
        };
  
      default:
        return state;
    }
  };
  
  export default detailItemReducers;
  