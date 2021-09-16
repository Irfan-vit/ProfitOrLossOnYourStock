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
  var [purchase, setPurchase] = useState("");
  var [quantity, setQuantity] = useState();
  var [current, setCurrent] = useState();
  var [output, setOutput] = useState(
    "Please Input all the values for calculating your stocks Profit/Loss"
  );
  var [graphics, setGraphics] = useState();
  var [theme, setTheme] = useState();
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
    if (
      !current ||
      !purchase ||
      !quantity ||
      current <= 0 ||
      purchase <= 0 ||
      quantity <= 0
    ) {
      setOutput("Please Enter the values properly");
      graphics = "";
      setGraphics(graphics);
      theme = true;
      setTheme(theme);
      return;
    }
    var difference = (current - purchase) * quantity;
    console.log(difference);
    var differencePercentage = (
      ((current - purchase) * 100) /
      purchase
    ).toFixed(2);
    console.log(differencePercentage);
    if (differencePercentage < -50) {
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
        <form>
          <h1>Check Profit/Loss on your Stock</h1>
          <div class="form__group">
            <input
              onChange={getPurchasePrice}
              type="number"
              min="1"
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
              min="1"
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
              min="1"
              class="form__field"
              placeholder="(₹)"
              required
            />
            <label for="name" class="form__label">
              Current price (₹)
            </label>
          </div>

          <button type="button" onClick={clickHandler}>
            check
          </button>
        </form>
      </div>
      <div className="result">
        <h1 style={{ color: "black" }}>{output}</h1>
        <div>{graphics}</div>
      </div>
      <footer id="footer">
        <div id="footer-container">
          <div className="social">
            <h3>Social</h3>
            <a href="https://www.linkedin.com/in/irfan-nawaz/">
              <i
                className="fab fa-linkedin-in"
                style={{ paddingRight: "10px", paddingTop: "5px" }}
              ></i>
              linkedin
            </a>
            <a href="https://twitter.com/shaik__irfan">
              <i
                className="fab fa-twitter"
                style={{ paddingRight: "10px", paddingTop: "5px" }}
              ></i>
              twitter
            </a>
            <a href="https://github.com/Irfan-vit">
              <i
                className="fab fa-github"
                style={{ paddingRight: "10px", paddingTop: "5px" }}
              ></i>
              github
            </a>
          </div>
          <div className="author">
            <h3>Author</h3>
            <p>Made With ❤️ by Shaik Md Irfan Nawaz</p>
          </div>
        </div>
      </footer>
    </div>
  );
}