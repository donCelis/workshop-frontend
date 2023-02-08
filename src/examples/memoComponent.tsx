import { memo, useState } from "react";
import "./styles.css";

const Child = () => {
  console.log("Child re-renders");
  return (
    <>
      <p>Children component</p>
    </>
  );
};

const handleMemoProps = (prevProps: any, nextProps: any) => {
  return true;
};

const ChildMemo = memo(Child);

const App = () => {
  const [state, setState] = useState(1);
  const [value, setValue] = useState("");

  const onChangeInput = (value: React.FormEvent<HTMLInputElement>) => {
    setState(state + 1);
    setValue(value.currentTarget.value);
  };

  console.log("Re-render number: ", state);

  return (
    <>
      <h2>Ver en consola la cantidad de renders</h2>
      <input type="text" onChange={onChangeInput} />
      <ChildMemo />
    </>
  );
};

export default App;
