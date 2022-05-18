import React from 'react'
import { useState } from 'react';

export default function TodoItem({todo,handleStatus,handleUpdate,handleDelete}) {
  const [upd,setUp] = useState({})
  
    return (
      <div>
   {todo.map((e)=>{
   
     return(
       <div key={e.id}>
      {e.update?<input id= {e.id } value={upd[e.id]} onChange= {(e)=>{
          setUp({
            ...upd,
            [e.target.id] : e.target.value
          })
      }}></input>:<h1>{e.name}</h1>} 
       <h5>{e.status?"Done":"Not Done"}</h5>
       <button onClick={()=>{
           handleStatus(e.id)
       }}>Toggle</button>
       <button onClick={()=>{
           handleDelete(e.id)
       }}>Delete</button>
       <button onClick={()=>{
          if(e.update==false){
              setUp({
                ...upd,
                [e.id]:e.name
              })
          }
               handleUpdate(e.id,e.update,upd[e.id])
          
       }}>{e.update?"Confirm Update":"Update"}</button>
       </div>
     )
   })}
   </div>
  )
}
