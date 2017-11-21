import * as  TodoActions from '../actions/todoActions'


export function TodoListReducer(state = [], action){
    switch (action.type) {
        case TodoActions.CREATE_TODO_SUCCESS:
            return [
                ...state,
                action.todo
            ];
        case TodoActions.GET_TODOS_SUCCESS:
            return action.todos.data.data.docs;
        case TodoActions.START_EDITING:
            return [
                ...state,

            ]    
        default:
            return state 
    }
}
