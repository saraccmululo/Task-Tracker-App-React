import { useState } from "react";

 const TodoList = () => {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] =useState([
    {id: 1, taskName: "Do homework", isCompleted: false}, 
    {id: 2, taskName: "Clean Room", isCompleted: false}, 
    {id: 3, taskName: "Walk the Dog", isCompleted: false}]);

  function inputTask (event) {
    setNewTask(event.target.value)
  }

  function addTask () {
    const lastId = todoList[todoList.length-1].id;
    setTodoList((prev)=>[...prev, {id: lastId + 1, taskName: newTask, isCompleted: false}]);
    setNewTask("");
  }
  
  function handleDelete(id) {
    setTodoList((prev)=>prev.filter((task)=>(task.id!==id)));
  }

  function handleCompletion(id) {
    setTodoList(todoList.map((task)=>task.id===id? {...task, isCompleted: !task.isCompleted} : task));
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input 
        type="text" 
        placeholder="New task..."
        value={newTask}
        onChange={inputTask}
      />
      <button 
        onClick={addTask} 
        disabled={!newTask}
      >
        Add
      </button>
      <ul>
        {todoList.map((task)=>
        <li key={task.id}>
          {task.taskName}
          <p>Task Completed: {task.isCompleted? "Yes": "No"}</p> 
          <button onClick={()=> handleCompletion(task.id)}>{task.isCompleted? "Undo" : "Done"}</button>
          <button onClick={()=> handleDelete(task.id)}>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}
export default TodoList