import styles from "./Todoitem.module.css";
function Todoitem({ todoName, todoDate }) {
  return (
    <div className="container ">
      <div className={`${styles["kgrow"]} row`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles["kgbutton"]} btn btn-danger kg-button`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
