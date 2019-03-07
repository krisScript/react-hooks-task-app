import React,{useState} from 'react'
 const TaskForm = props => {
  const {addTask,id} = props
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')

  const submitHandler = e => {
      e.preventDefault()
     console.log(title,description)
     const task  = {
         title,
         description,
         id
     }
     addTask(task)
     setTitle('')
     setDescription('')
  }
  return (
      <form onSubmit={submitHandler}>
  <div className="field">
  <label className="label">Task Title</label>
  <div className="control has-icons-left has-icons-right">
  <input onChange={e => setTitle(e.target.value)} className="input " value={title} type="text" placeholder="Task title" name="title" required/>
  </div>
</div>
 <div className="field">
  <label className="label">Task Description</label>
  <div className="control has-icons-left has-icons-right">
  <input className="input " type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Task Description" name="description" required/>
  </div>
</div> 
<div className="field is-grouped">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>
</div>
      </form>
  )
}

export default TaskForm