import { createContext, useState, useEffect } from "react";
import { getTaskData, urlbase } from "../data/task";
import axios from "axios";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  // useEffect(() => {
  //   console.log(data);
  //   setTasks(data);
  // }, []);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTaskDataAndUpdateState = async () => {
      try {
        const data = await getTaskData();
        // console.log(data);
        setTasks(data);
      } catch (error) {
        console.error("Error al obtener los datos en useData:", error);
      }
    };

    getTaskDataAndUpdateState();
  }, []);
  async function createTask(newTask) {
    try {
      const response = await axios.post(`${urlbase}/api/task`, newTask);

      if (response.status !== 201) {
        throw new Error(`Error creating task. Status: ${response.status}`);
      }

      // Si la creación fue exitosa, actualiza el estado con las nuevas tareas
      const updatedTasks = await getTaskData();
      setTasks(updatedTasks);
      // setTasks([
      //   ...tasks,
      //   {
      //     title: newTask.title,
      //     id: newTask.id, // Aquí estás usando newTask.id
      //     description: newTask.description,
      //   },
      // ]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  }
  // async function createTask(newTask) {
  //   try {
  //     const response = await fetch(`${urlbase}/api/task`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newTask),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error creating task. Status: ${response.status}`);
  //     }

  //     // Si la creación fue exitosa, actualiza el estado con las nuevas tareas
  //     const updatedTasks = await fetchData();
  //     setTasks(updatedTasks);
  //   } catch (error) {
  //     console.error("Error creating task:", error);
  //   }
  // }
  // function createTask(task) {
  //   setTasks([
  //     ...tasks,
  //     {
  //       title: task.title,
  //       id: tasks.length,
  //       description: task.description,
  //     },
  //   ]);
  // }
  function deleteTask(TaskId) {
    // console.log(tasks);
    // console.log(TaskId);
    axios
      .delete(`${urlbase}/api/task/${TaskId}`)
      .then((response) => {
        if (response.status === 204) {
          // Si la eliminación fue exitosa, actualizar el estado
          setTasks(tasks.filter((task) => task.id !== TaskId));
        } else {
          console.error(`Error deleting task. Status: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
    // setTasks(tasks.filter((task) => task.id !== TaskId));
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
