import React from 'react';

import TodoListItem from './todoListItem';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import List from 'material-ui/List/List';

import './todoList.css'

import axios from 'axios';


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

    componentDidMount() {
        axios.get('http://localhost:3000/api/todos')
        .then(res => {
            console.log(res)
            console.log(res.data)
            this.setState({
                todos: res.data.data.docs
            })
        })
    }

    render() {

        let todoItems = this
            .state
            .todos
            .map(todo => {
                return <TodoListItem todo={todo} />
            })

        return <div className="todo-list">
            {todoItems}

            <div className="new-todo">

                <TextField hintText="Todo Title" />
                <TextField hintText="Todo Description" />

                <RaisedButton label="Create" />
            </div>

        </div>
    }
}

export default TodoList;