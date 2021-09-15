import React, { useState } from "react";
import "./styles.css";
import profit from "./profit.gif";
import loss from "./loss.gif";
import gif from "./laod.gif";
import poor from "./poor2.gif";
import sadbackground from "./sadbg.gif";
import happpybackground from "./blackBg.jpg";
import nothing from "./nothing.gif";
export default function App() {
  var [purchase, setPurchase] = useState();
  var [quantity, setQuantity] = useState();
  var [current, setCurrent] = useState();
  var [output, setOutput] = useState();
  var [graphics, setGraphics] = useState();
  var [theme, setTheme] = useState();
  var [btnChk, setBtnChk] = useState(false);
  function getPurchasePrice(event) {
    purchase = event.target.value;
    if(purchase <= 0) {
      // alert("Please Enter correct values" + purchase + ": is not accaptable");
      setOutput("Please Enter correct values" + purchase + ": is not accaptable");
    } else {
      setPurchase(purchase);
    }
  }
  function getPurchaseQuantity(event) {
    quantity = event.target.value;
    if(quantity <= 0) {
      // alert("Please Enter correct values" + quntaty + ": is not accaptable");
      setOutput("Please Enter correct values" + quntaty + ": is not accaptable");
    } else {
      setQuantity(quantity);
    }
  }
  function getCurrentPrice(event) {
    current = event.target.value;
    if(current <= 0) {
      // alert("Please Enter correct values" + current + ": is not accaptable");
      setOutput("Please Enter correct values" + current + ": is not accaptable");
    } else {
      setCurrent(current);
    }
  }
  function clickHandler() {
    var difference = (current - purchase) * quantity;
    console.log(difference);
    var differencePercentage = (
      ((current - purchase) * 100) /
      purchase
    ).toFixed(2);
    console.log(differencePercentage);
    if(isNaN(differencePercentage) || differencePercentage === undefined || isNaN(difference) || difference === undefined){
      setOutput("Please Enter correct values" + quntaty + ": is not accaptable");
      setBtnChk(false);
    }
    else if (differencePercentage < -50) {
      setBtnChk(true);
      graphics = <img style={{ marginTop: "1rem" }} src={gif}></img>;
      setGraphics(graphics);
      setTimeout(() => {
        graphics = <img style={{ marginTop: "1rem" }} src={poor}></img>;
        setGraphics(graphics);
        theme = false;
        setTheme(theme);
        output =
          "You lost " +
          Math.abs(differencePercentage) +
          "%. " +
          " your total loss is : ₹" +
          Math.abs(difference);
        setOutput(output);
      }, 1500);
    } else if (differencePercentage > 0) {
      setBtnChk(true);
      graphics = <img style={{ marginTop: "1rem" }} src={gif}></img>;
      setGraphics(graphics);
      setTimeout(() => {
        graphics = <img style={{ marginTop: "1rem" }} src={profit}></img>;
        setGraphics(graphics);
        theme = true;
        setTheme(theme);
        output =
          "You Won " +
          Math.abs(differencePercentage) +
          "%. " +
          " your total profit is : ₹" +
          Math.abs(difference);
        setOutput(output);
      }, 1500);
    } else if (differencePercentage < 0 && differencePercentage >= -50) {
      setBtnChk(true);
      graphics = <img style={{ marginTop: "1rem" }} src={gif}></img>;
      setGraphics(graphics);
      setTimeout(() => {
        graphics = <img style={{ marginTop: "1rem" }} src={loss}></img>;
        setGraphics(graphics);
        theme = true;
        setTheme(theme);
        output =
          "You Lost " +
          Math.abs(differencePercentage) +
          "%. " +
          " your total loss is : ₹" +
          Math.abs(difference);
        setOutput(output);
      }, 1500);
    } else if (current === purchase) {
      setBtnChk(true);
      graphics = <img style={{ marginTop: "1rem" }} src={gif}></img>;
      setGraphics(graphics);
      setTimeout(() => {
        graphics = <img style={{ marginTop: "1rem" }} src={nothing}></img>;
        setGraphics(graphics);
        theme = true;
        setTheme(theme);
        output =
          "You Won " +
          Math.abs(differencePercentage) +
          "%. " +
          " your total profit is : ₹" +
          Math.abs(difference);
        setOutput(output);
      }, 1500);
    }
  }
  return (
    <div className="App">
      <div
        className="values"
        style={{
          backgroundImage:
            theme !== false
              ? `url(${happpybackground})`
              : `url(${sadbackground})`
        }}
      >
        <h1>Check Profit/Loss on your Stock</h1>
        <div class="form__group">
          <input
            onChange={getPurchasePrice}
            type="number"
            min = "1"  
            class="form__field"
            placeholder="(₹)"
            required
          />
          <label for="name" class="form__label">
            Purchase Price (₹)
          </label>
        </div>

        <div class="form__group">
          <input
            onChange={getPurchaseQuantity}
            type="number"
            min = "1"
            class="form__field"
            placeholder="Quantity"
            required            
          />
          <label for="name" class="form__label">
            Purchase Quantity
          </label>
        </div>

        <div class="form__group">
          <input
            onChange={getCurrentPrice}
            type="number"
            min = "1"
            class="form__field"
            placeholder="(₹)"
            required
          />
          <label for="name" class="form__label">
            Current price (₹)
          </label>
        </div>

        <button disabled={btnChk} onClick={clickHandler}>check</button>
      </div>
      <div className="result">
        <h1 style={{ color: "black" }}>{output}</h1>
        <div>{graphics}</div>
      </div>
    </div>
  );
}
