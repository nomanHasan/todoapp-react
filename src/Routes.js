import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import TodoContainer from './todos/containers/todoContainer'



const Routes = (props) => {
    return (
        <BrowserRouter>
            <div className="routes">
                <Switch>
                    <Route path="/todos" component={TodoContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export { Routes }