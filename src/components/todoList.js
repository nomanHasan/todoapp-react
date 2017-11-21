import React from 'react';

// import TodoListItem from './todoListItem';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ListItem from 'material-ui/List/ListItem';
import Card from 'material-ui/Card';

import List from 'material-ui/List/List';

import './todoList.css'

import axios from 'axios';
import * as todoActions from '../actions'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    componentDidMount() {
        axios
            .get('http://localhost:3000/api/todos')
            .then(res => {
                console.log(res)
                console.log(res.data)
                this.setState({todos: res.data.data.docs})
            })
    }

    createTodo = e => {
        console.log(this.state)
        console.log(todoActions)
        todoActions.addTodo({
            title: this.state.newTitle,
            description: this.state.newDes,
        })
    }

    changeTitle = e => {
        this.setState(...this.state, {newTitle: e.target.value})
    }

    changeDescription = e => {
        this.setState(...this.state, {newDes: e.target.value})
    }

    render() {

        let todoItems = this
            .props
            .todos
            .map(todo => {
                return <TodoListItem todo={todo} key={todo._id}/>
            })

        return <div className="todo-list">
            {todoItems}

            <div className="new-todo">
                <TextField hintText="Todo Title" onChange={this.changeTitle} />
                <TextField hintText="Todo Description" onChange={this.changeDescription}/>
                <RaisedButton label="Create" onClick={() => this.createTodo()}/>
            </div>

        </div>
    }
}

export default TodoList;

function TodoListItem(props) {
    return (
        <Card className="list-item">
            <div className="title">
                {props.todo.title}
            </div>
            <div className="description">
                {props.todo.description}
            </div>
            <div className="status">
                {props.todo.status}
            </div>
            <div className="date">
                {props.todo.date}
            </div>
            <div className="option">
                <RaisedButton label="Complete"/>
                <RaisedButton label="Edit"/>
                <RaisedButton label="Delete"/>
            </div>
        </Card>
    )
}