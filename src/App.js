import React, { useState } from "react";
import "./styles.css";
import profit from "./profit.gif";
import loss from "./loss.gif";
import gif from "./laod.gif";
export default function App() {
  var [purchase, setPurchase] = useState();
  var [quantity, setQuantity] = useState();
  var [current, setCurrent] = useState();
  var [output, setOutput] = useState();
  var [graphics, setGraphics] = useState();
  function getPurchasePrice(event) {
    purchase = event.target.value;
    setPurchase(purchase);
  }
  function getPurchaseQuantity(event) {
    quantity = event.target.value;
    setQuantity(quantity);
  }
  function getCurrentPrice(event) {
    current = event.target.value;
    setCurrent(current);
  }
  function clickHandler() {
    var difference = (current - purchase) * quantity;
    console.log(difference);
    var differencePercentage = (
      ((current - purchase) * 100) /
      purchase
    ).toFixed(2);
    console.log(differencePercentage);
    if (differencePercentage < 0) {
      graphics = <img style={{ marginTop: "1rem" }} src={gif}></img>;
      setGraphics(graphics);
      setTimeout(() => {
        graphics = <img style={{ marginTop: "1rem" }} src={loss}></img>;
        setGraphics(graphics);
        output =
          "You lost " +
          Math.abs(differencePercentage) +
          "%. " +
          " your total loss is : ₹" +
          Math.abs(difference);
        setOutput(output);
      }, 3000);
    } else if (differencePercentage > 0) {
      graphics = <img style={{ marginTop: "1rem" }} src={gif}></img>;
      setGraphics(graphics);
      setTimeout(() => {
        graphics = <img style={{ marginTop: "1rem" }} src={profit}></img>;
        setGraphics(graphics);
        output =
          "You Won " +
          Math.abs(differencePercentage) +
          "%. " +
          " your total profit is : ₹" +
          Math.abs(difference);
        setOutput(output);
      }, 3000);
    }
  }
  return (
    <div className="App">
      <h1>Purchase Price (₹)</h1>
      <input type="number" onChange={getPurchasePrice} />
      <h1>Purchase Quantity</h1>
      <input type="number" onChange={getPurchaseQuantity} />
      <h1>Current price (₹)</h1>
      <input type="number" onChange={getCurrentPrice} />
      <h1>Calculate</h1>
      <button onClick={clickHandler}>check</button>
      <h1>{output}</h1>
      <div>{graphics}</div>
    </div>
  );
}
