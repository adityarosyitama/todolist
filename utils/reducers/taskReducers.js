const initialState = {
  taskLocalData: [],
};

const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA_TASK':
      return {
        ...state,
        taskLocalData: action.data,
      };
    case 'RESET_DATA_TASK':
      return {
        ...state,
        taskLocalData: [],
      };
    default:
      return state;
  }
};

export default taskReducers;
