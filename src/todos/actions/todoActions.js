//Import the Todo API 

import { TodoApi } from "../../api/todoApi";


// These are the action type constants. Ordered by CRUD order. 
// There is a pattern of Action, Action_Success, Action_Error action types for the Async actions. 



//Create
export const CREATE_TODO = '[Todo] CREATE_TODO' 
export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS' 
export const CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR' 


//Read
export const GET_TODOS = '[Todo] GET_TODOS' 
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS' 
export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR' 


//Update
export const START_EDITING ='[Todo] START_EDITING'
export const CANCEL_EDITING = '[Todo] CANCEL_EDITING'

export const UPDATE_TODO = '[Todo] UPDATE_TODO' 
export const UPDATE_TODO_SUCCESS = '[Todo] UPDATE_TODO_SUCCESS' 
export const UPDATE_TODO_ERROR = '[Todo] UPDATE_TODO_ERROR' 

export const COMPLETE_TODO = 'COMPLETE_TODO'


//Delete
export const DELETE_TODO = '[Todo] DELETE_TODO' 
export const DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS' 
export const DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR' 



 
//These are the action types Also ordered in CRUD Order.

//Create

//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

export function CreateTodo(todo){
    return (dispatch, getState) => {
        return TodoApi.createTodo(todo).then(res => {
            dispatch(CreateTodoSuccess(res.data.data))
        })
    }
}

export function CreateTodoSuccess(todo){
    return {
        type:CREATE_TODO_SUCCESS,
        todo
    }
}


//Read
export function GetTodos(){
    return (dispactch, getState) => {
        return TodoApi.getTodo().then(res => {
            dispactch(GetTodoSuccess(res))
        })
    }
}

export function GetTodoSuccess(todos){
    return {
        type:GET_TODOS_SUCCESS,
        todos
    }
}


//Update
export function StartEditing(_id) {
    return {
        type: START_EDITING,
        _id
    }
}
export function CancelEditing(_id) {
    return {
        type: CANCEL_EDITING,
        _id
    }
}

export function UpdateTodo(todo) {
    return (dispatch, getState) => {
        
        //Multiple actions can be sent usign the Redux-Thunk middleware

        dispatch({
            type: UPDATE_TODO,
            todo
        })
        TodoApi.updateTodo(todo).then(res => {
            dispatch(UpdateTodoSuccess(res.data.data))
        })
    }
}
export function UpdateTodoSuccess(todo) {
    return {
        type: UPDATE_TODO_SUCCESS,
        todo,
        _id: todo._id
    }
}


//Delete
export function DeleteTodo(todo) {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_TODO,
            todo
        })
        TodoApi.removeTodo(todo).then(res => {
            if (res.status == 204) {
                dispatch(DeleteTodoSuccess(todo))
            }
        })
    }
}
export function DeleteTodoSuccess(todo) {
    return {
        type: DELETE_TODO_SUCCESS,
        todo,
        _id: todo._id
    }
}