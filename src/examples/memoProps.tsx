import { memo, useMemo, useState } from "react";
import "./styles.css";

const Child = (prop: { value: { value: string } }) => {
  console.log("Child re-renders", prop.value.value);
  return (
    <>
      <p>Children component :{prop.value.value}</p>
    </>
  );
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

  const memoValue = useMemo(() => ({ value: "second" }), []);

  return (
    <>
      <h2>Ver en consola la cantidad de renders</h2>
      <input type="text" onChange={onChangeInput} />
      <br />
      <ChildMemo value={{ value: "first" }} />
      <br />
      <ChildMemo value={memoValue} />
    </>
  );
};

export default App;
