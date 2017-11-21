import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as todoActions from '../actions'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



import TodoList from '../components/todoList'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
})

console.log(todoActions)

const App = ({todos, todoActions}) => (
  <MuiThemeProvider>
  <div className="App">
  <TodoList todos={todos} actions={todoActions}/>
  </div>
</MuiThemeProvider>
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)