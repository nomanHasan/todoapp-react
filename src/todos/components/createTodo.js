import React, { Component } from 'react';


import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

// import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreateTodo extends Component {


    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            date: moment()
        }
        console.log(this.state.date)
    }

    changeNewTitle = (event) => {
        this.setState({
            title: event.target.value
        })  
    }

    changeNewDescription = (event) => {
        this.setState({
            description: event.target.descriptionw
        })
    }

    changeNewDate = (event) => {
        this.setState({
            date: event
        })
    }


    render() {
        return (
            <Table.Row>
                <Table.Cell>
                    <Input placeholder='Title' value={this.state.title} onChange={this.changeNewTitle} />
                </Table.Cell>
                <Table.Cell>
                    <Input placeholder='Description' value={this.state.description} onChange={this.changeNewDescription} />
                </Table.Cell>
                <Table.Cell>
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.changeNewDate}
                    />
                </Table.Cell>
                <Table.Cell>
                    <Button color='green'>
                        Create
                    </Button>
                    <Button color='blue'>
                        Reset
                    </Button>
                    <Button color='red'>
                        Cancel
                    </Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default CreateTodo;