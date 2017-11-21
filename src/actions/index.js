import * as types from '../constants/actionTypes'

export const addTodo = todo => ({ type: types.ADD_TODO, todo })


export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, todo) => ({ type: types.EDIT_TODO, id, todo })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })

