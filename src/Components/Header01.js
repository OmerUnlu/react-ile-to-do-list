import React from 'react'
import { AppBar, Toolbar, IconButton,Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Header01 = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "lightblue", marginBottom:"20px"}}>
                <Toolbar className='toolbar' variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <AssignmentIcon fontSize='large'/>
                    </IconButton>
                    <Typography variant="h4" color="inherit" component="div">
                        To Do List
                    </Typography>
                </Toolbar>
            </AppBar>
    </>
    )
}

export default Header01