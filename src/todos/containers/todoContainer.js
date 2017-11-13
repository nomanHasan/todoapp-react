import React, { Component } from 'react';
import * as TodoActions from '../actions/todoActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {PropTypes} from 'prop-types'

export class TodoContainer extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div className="todo-container">
                <h2>TODO CONTAINER</h2>
                <ul>
                    {this.props.todos.map(t => {
                        return <li>{t.title} {t.description} {t.date}</li>
                    })}
                </ul>
            </div>
        );
    }
}

TodoContainer.propTypes  = {
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