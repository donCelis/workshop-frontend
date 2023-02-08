import { useState } from "react";
import "./styles.css";

const App = () => {
  const [state, setState] = useState(1);

  const onChangeInput = (value: React.FormEvent<HTMLInputElement>) => {
    setState(state + 1);
  };

  console.log("Re-render number: ", state);

  return (
    <>
      <h2>Ver en consola la cantidad de renders</h2>
      <input type="text" onChange={onChangeInput} />
    </>
  );
};

export default App;
