import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'



const Routes = (props) => {
    return (
        <BrowserRouter>
            <div className="routes">
                <Link to="/todos" />
            </div>
            <Switch>
                <Route path="/todos"/>
                <Route/>
                <Route/>
            </Switch>
        </BrowserRouter>
    )
}