import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
const App = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment)}>in</button>
      <button onClick={() => dispatch(decrement)}>de</button>
    </div>
  );
};

export default App;
