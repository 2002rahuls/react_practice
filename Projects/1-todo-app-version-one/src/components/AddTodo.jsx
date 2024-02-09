function AddTodo() {
  return (
    <div class="container items-container">
      <div class="row kgrow">
        <div class="col-6">
          <input type="text" paceholder="Enter task" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
