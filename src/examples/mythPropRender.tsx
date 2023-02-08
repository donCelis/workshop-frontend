import { useState } from "react";
import "./styles.css";

const Child = (props: { text: string }) => {
  console.log("Child re-renders");
  return (
    <>
      <p>Children with value: {props.text}</p>
    </>
  );
};

const valueProp = "test";

const App = () => {
  const [state, setState] = useState(1);
  const [value, setValue] = useState("");

  const onChangeInput = (value: React.FormEvent<HTMLInputElement>) => {
    setState(state + 1);
    setValue(value.currentTarget.value);
  };

  return (
    <>
      <h2>Ver en consola la cantidad de renders</h2>
      <input type="text" onChange={onChangeInput} />
      <Child text={valueProp} />
    </>
  );
};

export default App;
