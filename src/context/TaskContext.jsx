import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  //   let x = 20;
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  function deleteTask(TaskId) {
    // console.log(tasks);
    // console.log(TaskId);
    setTasks(tasks.filter((task) => task.id !== TaskId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
