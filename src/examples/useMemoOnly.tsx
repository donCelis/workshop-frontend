import React, { useState, useMemo } from "react";
import "./styles.css";

const Child = ({ value }: { value: { value: string } }) => {
  console.log("Child re-renders", value.value);
  return <>{value.value}</>;
};

const App = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  const memoValue = useMemo(() => ({ value: "child" }), []);

  return (
    <>
      <h2>Open console, click a button</h2>
      <p>Child will re-render even if its value is memoized</p>

      <button onClick={onClick}>click here</button>
      <br />
      <br />
      <Child value={memoValue} />
    </>
  );
};

export default App;
