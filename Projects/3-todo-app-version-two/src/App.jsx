import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    // {
    //   name: "Buy Milk",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Go to college",
    //   dueDate: "6/1/2024",
    // },
    // {
    //   name: " Learn React",
    //   dueDate: "14/1/2024",
    // },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    if (itemName === "") {
      alert("please enter a task");
    } else {
      console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);

      const newTodoItems = [
        ...todoItems,
        { name: itemName, dueDate: itemDueDate },
      ];

      setTodoItems(newTodoItems);
    }
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item Deleted: ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
