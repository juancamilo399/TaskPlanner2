import React, { useState } from 'react'
import './App.css';
import { TodoList } from './TodoList';
import { DrawerComponet } from './DrawerComponet';
import Button from '@material-ui/core/Button';
import moment from 'moment';

export const TodoApp = () => {

    const list = [{
        "description": "some description text ",
        "responsible": {
            "name": "Santiago Carrillo",
            "email": "sancarbar@gmail"
        },
        "status": "ready",
        "dueDate": moment(),
    },
    {
        "description": "some description text ",
        "responsible": {
            "name": "Juan Angel",
            "email": "juan@gmail"
        },
        "status": "ready",
        "dueDate": moment(),
    },
    {
        "description": "some description text ",
        "responsible": {
            "name": "Carlos Perez",
            "email": "carlos@gmail"
        },
        "status": "ready",
        "dueDate": moment(),
    }]

    const [drawer, setdrawer] = useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setdrawer({ ...drawer, [anchor]: open });
    };

    return (

        <div>
            <header className="App-header">
                <div style={{ textAlign: "left" }}>
                    <Button variant="contained" disableElevation onClick={toggleDrawer('left', true)}>{'Menu'}</Button>
                </div>
                <h1 className="App-title">Task Planner</h1>
            </header>

            <br></br>

            <DrawerComponet drawer={drawer} toggleDrawerf={toggleDrawer}></DrawerComponet>

            <TodoList todoList={list} />
        </div>

    )
}
