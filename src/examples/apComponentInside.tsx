import { useState, useEffect } from "react";
import "./styles.css";

const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  const VerySlowComponent = () => {
    console.log("Very slow component re-renders");
    useEffect(() => {
      console.log("Very slow component re-mounts");
    }, []);
    return <div style={{ marginTop: "20px" }}>Child Very slow component</div>;
  };

  console.log("Main component re render");

  return (
    <>
      <button onClick={onClick}>clic para re renderizar</button>
      <VerySlowComponent />
    </>
  );
};

const App = () => {
  console.log("Render App");
  return (
    <>
      <h2>Ver en consola la cantidad de renders</h2>
      <Component />
    </>
  );
};

export default App;
