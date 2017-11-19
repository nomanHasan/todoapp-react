import React, { Component } from 'react';


import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

// import DatePicker from 'material-ui/DatePicker';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateTodo = (props) => {
    return (
        <Table.Row>
            <Table.Cell>
                <Input placeholder='Title' />
            </Table.Cell>
            <Table.Cell>
                <Input placeholder='Description' />
            </Table.Cell>
            <Table.Cell>
                <DatePicker
                    selected={props.startDate}
                    onChange={props.handleChange}
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

export default CreateTodo;