import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0);
  const [check, setCheck] = useState(true);
  const [coin1, setCoin] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (event) => {
    setDollars(event.target.value);
    setCheck(false);
  };

  const onChoose = (event) => {
    setCoin(coins.filter((current, index) => event.target.value == index));
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <input
        type="text"
        placeholder="Write your dollar"
        value={dollars}
        onChange={onChange}
      ></input>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChoose}>
          <option>==== choose ====</option>
          {coins.map((coin, index) => (
            <option key={index} value={index}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}

      <h1>
        You can buy{" "}
        <div>
          {check ? "Write your dollars" : dollars / coin1[0].quotes.USD.price}
        </div>
      </h1>
    </div>
  );
}

export default App;
