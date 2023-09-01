import './App.css';
import Create from './Components/Create';
import Header01 from './Components/Header01';
import {useState} from 'react'
import Task from './Components/Task';
import {Grid} from '@mui/material'
import Footer from './Components/Footer';

function App() {
  const [tasks, setTasks] = useState([])
 
  const addTask = (newTask) =>{
    setTasks((prevTask) =>{
      return  [...prevTask,newTask]
    })
  };
  const deleteTask = (id) =>{
    setTasks((prevTask) => {
      return prevTask.filter((newTask,index) =>{
        return index !== id
      })
    })
  }
  return (
    <div className="App">
      <Header01/>
      <Create onAdd={addTask} />
      
      <Grid container sx={{marginTop:"20px", width:"60%", marginBottom:"50px"}} spacing={1} rowSpacing={3}>
        {tasks.map((task,index) =>{
          return (
            <Task key={index} id={index} title={task.title} content={task.content} onDelete={deleteTask} />
          )
        })}
      </Grid>
      <Footer/>
    
    </div>
  );
}

export default App;
