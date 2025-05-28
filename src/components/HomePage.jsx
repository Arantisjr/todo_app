import React, { useState } from "react";
import "../styles/Homepage.css";
import sun_image from "../assets/icon-sun.svg";
import Add_icon from "../assets/icon-check.svg";


const HomePage = () => {
  let defaultTasks = [
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries ",
    "Complete Todo App on Frontend Mentor"
  ]
  const[task, setTask] = useState([defaultTasks])

  return (
    <>
      <div className="home_page_main_container">
        <div className="home_page_heeading">
          <h1 className="text-4xl text-white cursor-pointer font-bold"> T O D O</h1>
          <button className="homepage_button">
            <img src={sun_image} alt=" sun image" />
          </button>
        </div>

        <div className="home_page_footer">
          <div className="hompage_todo_list">
            <div className="homepage_create_task">
              <button className="Add_button"> <img src={Add_icon} alt="" /> </button>
              <input className="inputTask" type="text" placeholder="Create a new todo.." ></input>
            </div>
            <div className="hompageTasks">
            {
              task.map((t, index) => (
              <div  className="hompageSubTasks">
                 <button className="Add_button"> <img src={Add_icon} alt="" /> </button>
                 <p key={index}>{t}</p>
              </div>
              ))
            }
            </div>
          </div>
          <h1>
            Drag and drop to reorder list
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
