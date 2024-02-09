import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let foodItems = ["Salad", "Green Vegetables", "Milk", "Roti", "Dal", "Wheat"];

  let [foodItems, setFoodItems] = useState([]);

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  let [textToShow, setTextState] = useState();

  const onKeyDown = (event) => {
    if (event.key == "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("this is" + newFoodItem);
    }
    console.log(event);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>

        <FoodItems items={foodItems} />
        <ErrorMessage items={foodItems} />
      </Container>
      {/* <Container>
        <p>Above is the list of healthy foods that are good gor your health</p>
      </Container> */}
    </>
  );
}
export default App;
