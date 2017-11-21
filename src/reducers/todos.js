import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/actionTypes'

import uuid from 'uuid/v4'


const initialState = [
  {
    title: 'Use Redux',
    description: "Really Hard",
    status: "done",
    _id: 0
  }
]

export default function todos(state = initialState, action){

  console.log(state, action)

  switch(action.type){
    case ADD_TODO: {
      return [
        ...state,
        action.todo
      ]
    }
    default: {
      return state
    }
  }


}