import React, { useContext, useState } from "react";
import CounterContext from "../context/CounterContext";

const CounterB = () => {
  const { counter, handleClick } = useContext(CounterContext);
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>CounterB</h1>
      <div>
        <span>Counted: {count}</span>
      </div>
      <div>
        <button onClick={handleClick}>Click counter A</button>
        <button onClick={() => setCount(count + 1)}>Click counter B</button>
      </div>
    </>
  );
};

export default CounterB;
