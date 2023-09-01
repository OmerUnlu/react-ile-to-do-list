import React from 'react'
import {CardContent, Grid, TextField,Card,CardActions,Button} from '@mui/material'

const Task = (props) => {
    const deleteClick = () => {
        props.onDelete(props.id)
    }
  
    return (
        <>
            <Grid item xs={4}>
                <Card className='mainCard'>
                    <CardContent>
                        <TextField id="outlined-basic" label="Title" variant="outlined" name='title' value={props.title}/>
                        <TextField id="outlined-multiline-static" label="Write Your Task" 
                            name='content' multiline rows={2} sx={{marginTop:"10px",width:"206px"}} value={props.content}/>
                    </CardContent>
                    <CardActions className='mainButton2'>
                        <Button variant="contained" sx={{fontWeight:"bold"}}  onClick={deleteClick}>Delete Task</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default Task