
import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progress_tracker from "./Components/Progress_tracker";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  return(
    <div>
      <h1>NexTask</h1>
      <p>Our friendly TaskManager</p>
      <Taskform addTask = {addTask}/>
      <Tasklist />
      <Progress_tracker />
      <button>Clear all tasks</button>
    </div>
  )
}