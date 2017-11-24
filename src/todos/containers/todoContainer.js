import React, { Component } from 'react';
import * as TodoActions from '../actions/todoActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import TodoTable from '../components/todoTable';



export class TodoContainer extends Component {
    constructor(props) {
        super(props)
    }

    // Todo Container methods dispatch the actions to the reducer functions. Ordered by CRUD Order

    //Create
    createTodo = (todo) => {
        this.props.actions.CreateTodo(todo)
    }


    // No methods for reading, the first loading of data is done in App.js where the
    // getTodo Action is dispatched

    //Update
    startEditing = (id) => {
        this.props.actions.StartEditing(id)
    }
    cancelEditing = (id) => {
        this.props.actions.CancelEditing(id)
    }
    editTodo = (todo) => {
        this.props.actions.UpdateTodo(todo)
    }
    completeTodo = (todo) => {
        this.props.actions.UpdateTodo({...todo, status: 'done'})
    }

    //Delete
    deleteTodo = (todo) => {
        this.props.actions.DeleteTodo(todo)
    }

    render() {
        return (
            <div className="todo-container">
                <TodoTable
                    todos={this.props.todos}
                    createTodo={this.createTodo}
                    startEditing={this.startEditing}
                    cancelEditing={this.cancelEditing}
                    editTodo={this.editTodo}
                    completeTodo = {this.completeTodo}
                    deleteTodo = {this.deleteTodo}
                />
            </div>
        );
    }
}

// Define the property types of this Container Component

TodoContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired
}

// This maps the state to the property of the component

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos
    }
}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

// The connect function connects the Redux Dispatch and state to the Todo Container Component.
// Without this the Component wont be functional.

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);