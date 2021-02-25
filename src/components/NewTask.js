import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { DrawerComponent } from './DrawerComponet';

export const NewTask = () => {

    const [responsible, setresponsible] = useState('')

    const [statei, setstatei] = useState('')

    const [dueDate, setdueDate] = useState(new Date())

    const [description, setdescription] = useState('')


    const handleResponsibleChange = (e) => {
        setresponsible(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setdescription(e.target.value)
    }

    const handleStateChange = (e) => {
        setstatei(e.target.value)
    }

    const handleDateChange = (date) => {
        setdueDate(date)
    }

    const handleSubmit = (e) =>{
        
       e.preventDefault();
        window.location.href="/"

    }

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
        <CssBaseline >
             <div className="App">
               <header className="App-header">
                <div style={{ textAlign: "left" }}>
                   <Button variant="contained" disableElevation onClick={toggleDrawer('left', true)}>{'Menu'}</Button>  
                </div>
                </header>
                <br></br>
                <DrawerComponent drawer={drawer} toggleDrawerf={toggleDrawer}></DrawerComponent>
                <form onSubmit={handleSubmit}  className="todo-form">
                <Typography variant="h3">New Task</Typography>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel  htmlFor="description" className="right-margin">
                    description:
                    </InputLabel >
                    

                    <Input id="description" autoFocus onChange={handleDescriptionChange} value={description} />
                    </FormControl>

                    <br/>
                    <br/>

                    <FormControl margin="normal" required fullWidth>
                    <InputLabel  htmlFor="responsible" className="right-margin">
                    responsible:
                    </InputLabel >
                    

                    <Input id="responsible" autoFocus onChange={handleResponsibleChange} value={responsible} />
                    </FormControl>

                    <br/>
                    <br/>

                    <FormControl margin="normal" required fullWidth>
                    <InputLabel  htmlFor="state" className="right-margin">
                    state:
                    </InputLabel >

                    <Select
                                labelId="state"
                                id="state"
                                value={statei}
                                onChange={handleStateChange}
                            >
                 
                 <          MenuItem value={"Ready"}>Ready</MenuItem>
                            <MenuItem value={"In Progress"}>In Progress</MenuItem>
                            <MenuItem value={"Done"}>Done</MenuItem>
                            </Select>
                    </FormControl>

                    <br/>
                    <br/>
                    <DatePicker
                        id="due-date"
                        selected={dueDate}
                        placeholderText="Due date"
                        onChange={(dueDate)=>handleDateChange(dueDate)}>
                    </DatePicker>

                    <br></br>
                    <br></br>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="submit">
                            
                            Add                                  
                    </Button>
                </form>
                
        </div>
        </CssBaseline>
        
    )
}
