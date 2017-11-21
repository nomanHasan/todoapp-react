import React, {Component} from 'react';

import {Button, Icon, Label, Menu, Table} from 'semantic-ui-react'
import {Input} from 'semantic-ui-react'

// import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class EditTodo extends Component {

    constructor(props) {
        super(props);

        if (this.props.todo) {
            this.state = {
                ...this.props.todo
            }
        } else {
            this.state = {
                ...this.emptyTodo()
            }
        }

        console.log(this.state)
    }

    emptyTodo = () => {
        return {title: "", description: "", date: moment()}
    }

    changeNewTitle = (event) => {
        this.setState({title: event.target.value})
    }

    changeNewDescription = (event) => {
        this.setState({description: event.target.value})
    }

    changeNewDate = (event) => {
        this.setState({date: event})
    }

    createTodo = (event) => {
        this.resetTodo()
        this
            .props
            .createTodo(this.state)
    }

    resetTodo = () => {
        this.setState({title: "", description: "", date: moment()})
    }

    render() {
        return (
            <Table.Row>
                <Table.Cell>
                    <Input
                        placeholder='Title'
                        value={this.state.title}
                        onChange={this.changeNewTitle}/>
                </Table.Cell>
                <Table.Cell>
                    <Input
                        placeholder='Description'
                        value={this.state.description}
                        onChange={this.changeNewDescription}/>
                </Table.Cell>
                <Table.Cell>
                    <DatePicker selected={this.state.date} onChange={this.changeNewDate}/>
                </Table.Cell>
                <Table.Cell>
                    <Button color='green' onClick={this.createTodo}>
                        Create
                    </Button>
                    <Button color='blue' onClick={this.resetTodo}>
                        Reset
                    </Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default EditTodo;