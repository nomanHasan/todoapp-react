import React, { Component } from 'react';
import * as TodoActions from '../actions/todoActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import TodoTable from '../components/todoTable';



export class TodoContainer extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    createTodo = (todo) => {
        // alert('Todo Created' + JSON.stringify(todo))
        this.props.actions.CreateTodo(todo)
    }

    startEditing = (id) => {
        this.props.actions.startEditing(id)
    }

    render() {
        return (
            <div className="todo-container">
                <TodoTable todos={this.props.todos} createTodo={this.createTodo} startEditing={this.startEditing} />
            </div>
        );
    }
}

TodoContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);