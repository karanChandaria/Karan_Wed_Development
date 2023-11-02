import React, { useState } from "react";

const initialvalue = [
  { id: "1", title: "Add" },
  { id: "2", title: "Sub" },
  { id: "3", title: "Del" },
];

export default function Todo() {
  const [todos, setTodos] = useState(initialvalue);
  const [isEditing,setisEditing] = useState("");
  const [add, setAdd] = useState("");
  const [edittext,seteditText] = useState("");

  const addTodo = () => {
    if (add === "") {
      alert("Please add a Task.");
    } else {
      setTodos([...todos, { id: todos.length + 1, title: add }]);
      setAdd("");
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const editStart = (id,text)=>{
    setisEditing(id);
    seteditText(text);
  }
  const saveTodo = (id)=>{
   const updatedTodo = todos.map((todo)=>{
      if(todo.id == id)
      {
        return {...todo,title:edittext}
      }
      return {...todo}
   });
   setTodos(updatedTodo);
   setisEditing(null)

  }

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        value={add}
        onChange={(e) => {
          setAdd(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((e) => (
          <li key={e.id} style={{listStyle:"none"}}>
            {e.title}
            {
            isEditing == e.id ?
             (<div>
               <input type="text" name="" id="" value={edittext} onChange={(e)=>seteditText(e.target.value)} />
               <button onClick={()=>saveTodo(e.id)}>
                Save
               </button>
             </div>) :
              (<div>
                {e.title}
                <button onClick={()=>editStart(e.id,e.title)}>
                 Edit
                </button>
                <button onClick={()=>deleteTodo(e.id)}>
                  Delete
                </button>

              </div>)
           }
          </li>
        ))}
      </ul>
    </>
  );
}
