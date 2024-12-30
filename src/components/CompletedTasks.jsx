import React from 'react'

const CompletedTasks = (tasks) => {
  return (
    <div>
        <h3>CompletedTasks</h3>
        <hr />
        {tasks.length===0?(<p>No Completed tasks!</p>):(
             <ul className="list-group">
             {tasks.map((task, index) => (
               <li key={index} className="list-group-item">
                 {task}
               </li>
             ))}
           </ul>
        )}
    </div>
  )
}

export default CompletedTasks