import React from 'react';

import TodoListItem from './todoListItem';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import List from 'material-ui/List/List';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    title: "First Todo",
                    description: "First is always tough"
                }, {
                    title: "Second Todo",
                    description: "Second is always tough"
                }, {
                    title: "Third Todo",
                    description: "Third is always tough"
                }, {
                    title: "Fourth Todo",
                    description: "Fourth is always tough"
                }
            ]
        }
    }
    render() {

        let todoItems = this
            .state
            .todos
            .map(todo => {
                return <TodoListItem todo={todo}/>
            })

        return <div className="todo-list">
            {todoItems}
            <TextField hintText="Todo Title"/>
            <TextField hintText="Todo Description"/>

            <RaisedButton label="Create"/>

        </div>
    }
}

export default TodoList;