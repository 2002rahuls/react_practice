import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Visual from "./components/Visual";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.headn}>
        <h1>Calculator</h1>
      </div>

      <div className={styles.calculator}>
        <Visual displayValue={calVal}></Visual>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
