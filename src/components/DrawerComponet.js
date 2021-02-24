import React, { useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export const DrawerComponet = ({drawer,toggleDrawerf}) => {

    const useStyles = makeStyles({
        list: {
          width: 250,
        },
        fullList: {
          width: 'auto',
        },
      });

      
    const classes = useStyles();

    const handleLogout = (e) =>{
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('Username');
      localStorage.removeItem('Password');
      window.location.href = "/";
    }

    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawerf(anchor, false)}
          onKeyDown={toggleDrawerf(anchor, false)}
        >
          
          <List>
            
            <ListItem  button key={'profile'}>
              <ListItemIcon ><AccountBoxIcon /> </ListItemIcon>
              <ListItemText primary={'profile'} />
            </ListItem>
        
        </List>
          <Divider />
          <List>
            
              <ListItem onClick={handleLogout} button key={'logout'}>
                <ListItemIcon><ExitToAppIcon /> </ListItemIcon>
                <ListItemText primary={'logout'} />
              </ListItem>
          
          </List>
          
        </div>
    );


    return (
        <div>
            
            <Drawer anchor={'left'} open={drawer['left']} onClose={toggleDrawerf('left', false)}>
                {list('left')}
            </Drawer>
            
        </div>
    )
}
