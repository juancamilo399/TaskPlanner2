import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { DrawerComponent } from './DrawerComponet';

export const UserProfile = () => {


    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [confirm, setconfirm] = useState('')

    const handleNameChange = (e) => {
        setname(e.target.value)
    }

    const handleEmailChange = (e) => {
        setemail(e.target.value)
    }

    const handlePassChange = (e) => {
        setpass(e.target.value)
    }

    const handleConfirmChange = (e) => {
        setconfirm(e.target.value)
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

    const handleSubmit = (e) =>{
        e.preventDefault()
        window.location.href="/"
    }

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
                <Typography variant="h3">Account</Typography>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel  htmlFor="description" className="right-margin">
                    name:
                    </InputLabel >
                    

                    <Input id="name" autoFocus onChange={handleNameChange} value={name} />
                    </FormControl>

                    <br/>
                    <br/>

                    <FormControl margin="normal" required fullWidth>
                    <InputLabel  htmlFor="email" className="right-margin">
                    email:
                    </InputLabel >
                    

                    <Input id="email" autoFocus onChange={handleEmailChange} value={email} />
                    </FormControl>
                    <br/>
                    <br/>

                    <FormControl margin="normal" required fullWidth>
                    <InputLabel  htmlFor="pass" className="right-margin">
                    pass:
                    </InputLabel >
                    

                    <Input id="pass" autoFocus onChange={handlePassChange} value={pass} />
                    </FormControl>

                   
                    <br/>
                    <br/>

                    <FormControl margin="normal" required fullWidth>
                    <InputLabel  htmlFor="confirm" className="right-margin">
                    confirm:
                    </InputLabel >
                    

                    <Input id="confirm" autoFocus onChange={handleConfirmChange} value={confirm} />
                    </FormControl>
                   

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
