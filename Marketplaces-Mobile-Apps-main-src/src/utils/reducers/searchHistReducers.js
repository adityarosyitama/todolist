const initialState = {
  searchHist: [],
};

const detailItemReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      return {
        ...state,
        // isLoggedIn: true,
        searchHist: action.data,
      };
    case 'RESET_SEARCH':
      return {
        ...state,
        searchHist: [],
        // isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default detailItemReducers;
