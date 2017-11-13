import {combineReducers} from 'redux'
import {TodoReducer} from '../todos/reducers/todoReducer'

const rootReducer = combineReducers({
    todos: TodoReducer
})

export default rootReducer