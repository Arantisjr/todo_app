import React, { useState } from "react";
import "../styles/Homepage.css";
import sun_image from "../assets/icon-sun.svg";
import { FaArrowUp, FaArrowDown, FaTrash } from "react-icons/fa";
const HomePage = () => {
  const [task, setTask] = useState([
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries ",
    "Complete Todo App on Frontend Mentor",
  ]);
  const [newTask, setNewTask] = useState("");

  // functions to Add, delete, move tasks up and down
  function handleInputChange(event) {
    setNewTask(event.target.value);
    ;
  }

  function handleAddTask() {

   if( newTask.trim() !== "") {  // A condition to check, so the user doesn'nt enter and empty task.
    setTask(t => [...t , newTask]);
    setNewTask("")
   }
    
  }

  function handleRemoveTask(index) {

    const updatedTask = task.filter((_,i) => i !== index); //the _ is convention a parameter that will be of no use
    setTask(updatedTask);
  }
  function handleMoveTaskUp(index) {
    const updatedTask = [...task]; // creating a clone cause react state are immutable
    //using array destructuring to swap indexes
    if(index > 0){
    [updatedTask[index], updatedTask[index -1]] = [updatedTask[index -1], updatedTask[index]];
    setTask(updatedTask)
    }
    

  }
  function handleMoveTaskDown(index) {
       const updatedTask = [...task]; // creating a clone cause react state are immutable
    //using array destructuring to swap indexes
    if(index < task.length - 1){
    [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
    setTask(updatedTask)
    }
  }

  return (
    <>
      <div className="home_page_main_container">
        <div className="home_page_heeading">
          <h1 className="text-4xl text-white cursor-pointer font-bold">
            {" "}
            T O D O
          </h1>
          <button className="homepage_button">
            <img src={sun_image} alt=" sun image" />
          </button>
        </div>

        <div className="home_page_footer">
          <div className="hompage_todo_list">
            <div className="createTask">
              <input
                className="inputTask"
                type="text"
                placeholder="Create a new todo.."
                value={newTask}
                onChange={handleInputChange}
              />
              <button className="addTask" onClick={handleAddTask}>Add</button>
            </div>
            <ul className="list_tasks">
              {task.map((t, index) => (
                <li key={index} className="tasks">
                  {t}
                  <div className="buttons">
                    <button className="arows" onClick={() => handleRemoveTask(index)}>
                      <FaTrash />
                    </button>
                    <button className="arows" onClick={() => handleMoveTaskUp(index)}>
                      <FaArrowUp />
                    </button>
                    <button className="arows" onClick={() => handleMoveTaskDown(index)}>
                      <FaArrowDown />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          <h1 className="instructions">Delete and Add tasks</h1>

          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
