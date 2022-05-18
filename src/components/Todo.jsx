import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { nanoid } from "nanoid";
import TodoItem from "./TodoItem";
export default function Todo() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [showAdd, setShowAdd] = useState(true)

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios.get("http://localhost:8080/data").then((d) => {
      setTodo(d.data);
    });
  }

  const setTodos = () => {
    let newTodo = {
      name: text,
      status: false,
      id: nanoid(),
      update:false
    };
    setTodo([...todo, newTodo]);
    sendData(newTodo);
  };

  const handleStatus = (id) => {
    // console.log("func", id)
  

    setTodo(
      todo.map((e) => {
        if (e.id == id) {
          axios
            .patch(`http://localhost:8080/data/${id}`, { status: !e.status })
            .then((res) => {
              // console.log(res)
            });
          return { ...e, status: !e.status };
        } else {
          return e;
        }
      }) 
    );
  
    
  };


 const handleUpdate = (id,upp,upname)=>{
if(upp==false){
  setTodo(
    todo.map((e) => {
      if (e.id == id) {
        axios
          .patch(`http://localhost:8080/data/${id}`, { update: !e.update })
          .then((res) => {
            // console.log(res)
          });
        return { ...e, update: !e.update };
      } else {
        return e;
      }
    }) 
  );
}else{
  setTodo(
    todo.map((e) => {
      if (e.id == id) {
        axios
          .patch(`http://localhost:8080/data/${id}`, { name: upname,update: !e.update })
          .then((res) => {
            // console.log(res)
          });
        return { ...e, name:upname,update: !e.update };
      } else {
        return e;
      }
    }) 
  );
}


 }


  const handleDelete = (id) => {
    setTodo(todo.filter((e) => e.id !== id));
    axios.delete(`http://localhost:8080/data/${id}`);
  };

  const sendData = (data) => {
    axios.post("http://localhost:8080/data", data);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={setTodos}>{showAdd?"Add Todo":"Update Todo"}</button>
     
     
     <TodoItem
        todo={todo}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
        handleUpdate = {handleUpdate}
      />
    </div>
  );
}
