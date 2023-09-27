export const SET_LIST = 'SET_LIST';

export const setList = (list) => {
  return {
    type: SET_LIST,
    payload: list,
  };
};