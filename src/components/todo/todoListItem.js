import React from 'react';

import ListItem from 'material-ui/List/ListItem';
import Card from 'material-ui/Card';

import './todoListItem.css'

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <Card className="list-item">
            <div className="title">
                {this.props.todo.title}
            </div>
            <div className="description">
                {this.props.todo.description}
            </div>
            <div className="status">
                {this.props.todo.status}
            </div>
            <div className="date">
                {this.props.todo.date}
            </div>
        </Card>
    }
}

export default TodoListItem;
