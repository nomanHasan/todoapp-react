import { TodoApi } from "../../api/todoApi";

export const CREATE_TODO = '[Todo] CREATE_TODO' 
export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS' 
export const CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR' 

export const GET_TODOS = '[Todo] GET_TODOS' 
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS' 
export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR' 

export const START_EDITING ='[Todo] START_EDITING'
export const UPDATE_TODO = '[Todo] UPDATE_TODO' 
export const UPDATE_TODO_SUCCESS = '[Todo] UPDATE_TODO_SUCCESS' 
export const UPDATE_TODO_ERROR = '[Todo] UPDATE_TODO_ERROR' 

export const DELETE_TODO = '[Todo] DELETE_TODO' 
export const DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS' 
export const DELETE_TODO_ERROR = '[Todo] DELETE_TODO_ERROR' 

export const COMPLETE_TODO = 'COMPLETE_TODO'


 

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

export function StartTodo(id) {
    return {
        type: START_EDITING,
        id
    }
}

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