import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';



import TodoList from './components/todo/todoList'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>

        <div className="App">

        <TodoList/>

        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
