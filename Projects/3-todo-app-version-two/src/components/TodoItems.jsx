import Todoitem from "./Todoitem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <Todoitem
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
