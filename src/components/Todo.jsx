import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { nanoid } from "nanoid";
import TodoItem from "./TodoItem";
import AddIcon from "@mui/icons-material/Add";

import { addTodo, deleteTodo, toggleUpdateTodo } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, editTodo, sortTodo } from "./../Redux/action";

export default function Todo() {
  const [text, setText] = useState("");
  const [filt, setFilt] = useState("");
  // const [todo, setTodo] = useState([]);
  // const [showAdd, setShowAdd] = useState(true)

  const dispatch = useDispatch();
  const todo = useSelector((store) => store.todo);

  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   axios.get("http://localhost:8080/data").then((d) => {
  //     setTodo(d.data);
  //   });
  // }

  const setTodos = () => {
    let newTodo = {
      name: text,
      status: false,
      id: nanoid(),
      update: false,
    };
    dispatch(addTodo(newTodo));
    setText("");

    // setTodo([...todo, newTodo]);
    // sendData(newTodo);
  };

  const handleStatus = (id) => {
    // console.log("func", id)

    // setTodo(
    //   todo.map((e) => {
    //     if (e.id == id) {
    //       // axios
    //       //   .patch(`http://localhost:8080/data/${id}`, { status: !e.status })
    //       //   .then((res) => {
    //       //     // console.log(res)
    //       //   });
    //       return { ...e, status: !e.status };
    //     } else {
    //       return e;
    //     }
    //   })
    // );

    dispatch(toggleTodo(id));
  };

  const handleUpdate = (data) => {
    // if(upp==false){
    //   setTodo(
    //     todo.map((e) => {
    //       if (e.id == id) {
    //         // axios
    //         //   .patch(`http://localhost:8080/data/${id}`, { update: !e.update })
    //         //   .then((res) => {
    //         //     // console.log(res)
    //         //   });
    //         return { ...e, update: !e.update };
    //       } else {
    //         return e;
    //       }
    //     })
    //   );
    // }else{
    //   setTodo(
    //     todo.map((e) => {
    //       if (e.id == id) {
    //         // axios
    //         //   .patch(`http://localhost:8080/data/${id}`, { name: upname,update: !e.update })
    //         //   .then((res) => {
    //         //     // console.log(res)
    //         //   });
    //         return { ...e, name:upname,update: !e.update };
    //       } else {
    //         return e;
    //       }
    //     })
    //   );
    // }
    dispatch(editTodo(data));
  };

  const handleDelete = (id) => {
    // setTodo(todo.filter((e) => e.id !== id));
    // axios.delete(`http://localhost:8080/data/${id}`);

    dispatch(deleteTodo(id));
  };

  // const sendData = (data) => {
  //   axios.post("http://localhost:8080/data", data);
  // };

  const toggleUpdate = (id) => {
    dispatch(toggleUpdateTodo(id));
  };

  return (
    <div>
      <input
        type="text"
        value={filt}
        placeholder="Filter by name"
        onChange={(e) => {
          setFilt(e.target.value);
        }}
      />
      <select
        onChange={(e) => {
          dispatch(sortTodo(e.target.value));
        }}
      >
        <option value="">SORT</option>
        <option value="name">Name</option>
        <option value="status">Status</option>
      </select>

      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={setTodos}>
        <AddIcon />
      </button>

      <TodoItem
        handleStatus={handleStatus}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        toggleUpdate={toggleUpdate}
        filt={filt}
      />

      {/* {todo.map((e)=>{
        return (
          <h1 key={e.id}>{e.name}</h1>
        )
      })} */}
    </div>
  );
}
