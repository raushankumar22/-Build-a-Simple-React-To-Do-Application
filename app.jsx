// App.jsx
import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList";

const App = () => {
  const dispatch = useDispatch();

  // add a todo
  const addTodo = (item) => {
    return dispatch({
      type: "todos/addTodo",
      payload: {
        id: Date.now(),
        item,
        completed: false,
      },
    });
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <TodoList />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const item = e.target.elements.item.value;
          if (!item) return;
          addTodo(item);
          e.target.elements.item.value = "";
        }}
      >
        <input type="text" name="item" placeholder="Add a new item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;