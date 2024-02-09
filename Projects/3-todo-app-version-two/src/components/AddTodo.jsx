import { useState } from "react";
import styles from "./AddTodo.module.css";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container items-container">
      <div className={`${styles["kgrow"]} row`}>
        <div className="col-6">
          <input
            type="text"
            paceholder="Enter task"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles["kgbutton"]} btn btn-success kg-button`}
            onClick={handleAddButtonClicked}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
