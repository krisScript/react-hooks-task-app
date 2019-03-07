import React, { useState,Fragment,useEffect} from 'react';
import 'bulma'
import Task from './Task'
import TaskForm from './TaskForm'

const App = () => {
  const initialTasks = () => JSON.parse(localStorage.getItem('tasks')) || []
  const [tasks,setTasks] = useState(initialTasks)
  const [id,setId] = useState(initialTasks.length)
  const addTask = task => {
    const newTasks = [...tasks,task]
    setTasks(newTasks)
  }
  const deleteTask = (id) => {
   const newTasks = tasks.filter(task => task.id !== id)
   setTasks(newTasks)
  }
  useEffect (() => {

    localStorage.setItem('tasks',JSON.stringify(tasks))
    setId(tasks.length)
    
})


  return (
    <>
    <section className="section">
    <TaskForm addTask={addTask} id={id}/></section>
    <section className="section">
     <div className="columns is-multiline" data-testid="tasks-container">
    {tasks.map(task => {
      return <Task key={task.id} title={task.title} description={task.description} id={task.id} deleteTask={deleteTask} />
    })}
    </div></section>
    </>
   
  )
}

export default App;
