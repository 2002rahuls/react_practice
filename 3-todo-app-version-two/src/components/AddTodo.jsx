import styles from "./AddTodo.module.css";
function AddTodo() {
  return (
    <div className="container items-container">
      <div className={`${styles["kgrow"]} row`}>
        <div className="col-6">
          <input type="text" paceholder="Enter task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles["kgbutton"]} btn btn-success kg-button`}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
