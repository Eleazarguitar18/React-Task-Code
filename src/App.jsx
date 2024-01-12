import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Registro from "./components/Registrar";
// console.log(data);
function App() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="container mx-auto p-10">
        {/* if (condition) {} */}
        <Registro />
        {/* <TaskForm />
        <TaskList /> */}
      </div>
    </div>
  );
}

export default App;
