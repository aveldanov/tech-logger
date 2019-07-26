import { ADD_TASK, DELETE_TASK } from '../types';


export const addTask = (value) => {
  console.log(value);

  console.log(value);

  return {
    type: ADD_TASK,
    payload: value
  }
}