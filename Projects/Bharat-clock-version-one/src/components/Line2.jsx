function Line2() {
  let time = new Date();
  return (
    <center>
      <p className="lead">
        This is the current time:{time.toLocaleDateString()}-
        {time.toLocaleTimeString()}{" "}
      </p>
    </center>
  );
}

export default Line2;
