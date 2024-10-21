import React from "react";
import CounterA from "../CounterA";
import { CounterContextProvider } from "../context/CounterContext";
const App = () => {
  return (
    <>
      <CounterContextProvider>
        <CounterA />
      </CounterContextProvider>
    </>
  );
};

export default App;
