import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Routes} from './Routes'

import {Provider} from 'react-redux'
import {configureStore} from './store/configureStore'

import * as TodoActions from './todos/actions/todoActions'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const store = configureStore()
store.dispatch(TodoActions.GetTodos())

const App = (props) => {
  return (
    <Provider store={store} >
      <Routes/>
    </Provider> 
  )
}

export default App;
