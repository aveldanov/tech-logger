import React from 'react';

import { ADD_TASK, DELETE_TASK } from '../types';
const initialState = {

  tasks: [
    { task: 'task11' },
    { task: 'task22' },
    { task: 'task33' }
  ],
  value: 'vl'

}

const reducer = (state = initialState, action) => {
  console.log(action.type);
  console.log(state);


  switch (action.type) {


    case ADD_TASK:
      console.log(state);
      return {
        ...state,
        tasks: [...state.tasks, {
          task: action.payload
        }]
      }


    default:
      return state;
  }
}

export default reducer
