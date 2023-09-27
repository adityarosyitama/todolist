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
    case 'ADDONE_DATA_TASK':
      return {
        ...state,
        taskLocalData: [...taskLocalData,action.data],
      };
    case 'UPDATE_DATA_TASK':
      const updatedData = state.taskLocalData.map(task => {
        if (task.id === action.data.id) {
          return {
            ...task,
            ...action.data.updatedTaskData,
          };
        }
        return task;
      });
      return {
        ...state,
        taskLocalData: updatedData,
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
