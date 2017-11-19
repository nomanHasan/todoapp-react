import React, { Component } from 'react';

import {Button, Table} from 'semantic-ui-react'

const TodoRow = (props) => {
    return (
        <Table.Row>
        <Table.Cell>{props.todo.title}</Table.Cell>
        <Table.Cell>{props.todo.description}</Table.Cell>
        <Table.Cell>{props.todo.date}</Table.Cell>
        <Table.Cell>
            <Button color='green'>
                <i className="fa fa-check"></i>
            </Button>
            <Button color='blue'>
                <i className="fa fa-pencil"></i>
            </Button>
            <Button color='red'>
                <i className="fa fa-trash"></i>
            </Button>
        </Table.Cell>
    </Table.Row>
    );
}

export default TodoRow;