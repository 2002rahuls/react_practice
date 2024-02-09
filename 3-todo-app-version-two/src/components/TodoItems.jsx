import Todoitem from "./Todoitem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <Todoitem todoName={item.name} todoDate={item.dueDate} />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
