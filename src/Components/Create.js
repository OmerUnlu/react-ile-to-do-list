import {React, useState} from 'react'
import {Card, CardActions, CardContent, Button, TextField} from '@mui/material'

const Create = (props) => {
    const [task, setTask] = useState({title:"",content:""});

    const detectChange = (event) => {
        console.log(event.target)
        const { name, value } = event.target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: value
        }));
    }
    
    const createTask = (event) =>{
        props.onAdd(task)
        setTask({
            title:"",
            content:""
        })
        event.preventDefault();
    }
    return (
        <>
            <Card className='mainCard'>
                <CardContent>
                    <TextField id="outlined-basic" label="Title" variant="outlined" name='title'
                               value={task.title} onChange={detectChange}/>
                    <TextField id="outlined-multiline-static" label="Write Your Task" name='content'  onChange={detectChange} 
                               multiline rows={3} sx={{marginTop:"10px",width:"206px"}} value={task.content}/>
                </CardContent>
                <CardActions className='mainButton'>
                    <Button variant="contained" sx={{fontWeight:"bold"}}  onClick={createTask}>Add New Task</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Create