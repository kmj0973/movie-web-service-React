import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  useEffect(() => {
    console.log("CALL THE API");
  }, []);

  useEffect(() => {
    console.log("Movie search", keyword);
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder="Search here..."
        onChange={onChange}
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"continue"} onClick={onClick} />
    </div>
  );
}

export default App;
