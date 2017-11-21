import {combineReducers} from 'redux'
import {TodoListReducer} from '../todos/reducers/todoReducer'

const rootReducer = combineReducers({
    todos: TodoListReducer
})

export default rootReducer