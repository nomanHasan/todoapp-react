import React, { Component } from 'react';




import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import TodoRow from './todoRow'
import CreateTodo from './createTodo'

const TodoTable = (props) => {
    return (

        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Options</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {props.todos.map(t => {
                    return <TodoRow todo={t} key={t._id} />
                })}
                <CreateTodo/>
            </Table.Body>

        </Table>
    )
}

export default TodoTable;