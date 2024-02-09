function Todoitem2() {
  let todoName = "GO to college";
  let todoDate = "6/1/2024";
  return (
    <div class="container ">
      <div class="row kgrow">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem2;
