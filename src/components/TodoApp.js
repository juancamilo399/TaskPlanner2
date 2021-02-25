import React, { useState } from 'react'
import './App.css';
import { TodoList } from './TodoList';
import { DrawerComponent } from './DrawerComponet';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { Link } from 'react-router-dom';
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

            <DrawerComponent drawer={drawer} toggleDrawerf={toggleDrawer}></DrawerComponent>


            <TodoList todoList={list} />
            <br></br>
            <br></br>

            <div style={{ textAlign: "center" }}>
                <Button
                    type="submit"

                    variant="contained"
                    color="primary"
                    className="submit"

                >

                    <Link to="/new" style={{ color: "white" }}> New</Link>


                </Button>
            </div>
        </div>

    )
}
