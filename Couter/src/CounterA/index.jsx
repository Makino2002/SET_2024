import React, { useContext, useState } from "react";
import CounterB from "../CounterB";
import CounterContext from "../context/CounterContext";

const CounterA = () => {
  const { counter, handleClick } = useContext(CounterContext);
  return (
    <>
      <div>
        <h1>CounterA</h1>
      </div>
      <div>
        <div>
          <span>Counted: {counter}</span>
        </div>
        <button onClick={handleClick}>Click</button>
      </div>
      <CounterB />
    </>
  );
};

export default CounterA;
