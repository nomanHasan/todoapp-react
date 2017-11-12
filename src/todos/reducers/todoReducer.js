import * as  TodoActions from '../actions/todoActions'


export default TodoReducer = (state = [], action) => {
    switch (action.type) {
        case TodoActions.CREATE_TODO_SUCCESS:
            return state;            
        default:
            return state;
    }
};