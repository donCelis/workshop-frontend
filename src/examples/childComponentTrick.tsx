import { useState } from "react";
import "./styles.css";

const VerySlowComponent = () => {
  console.log("Very slow component re-renders");
  return <div className="slow-component">Very slow component</div>;
};

const FullComponent = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  return (
    <div onClick={onClick} className="click-block">
      <p>Re-render count: {state}</p>
      <h3>Componente padre</h3>
      <p>Click this component - "slow" component will re-render</p>

      <VerySlowComponent />
    </div>
  );
};

const ComponentWithClick = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  return (
    <div onClick={onClick} className="click-block">
      <p>Re-render count: {state}</p>
      {children}
    </div>
  );
};

const SplitComponent = () => {
  return (
    <>
      <ComponentWithClick>
        <>
          <h3>Componente padre como children</h3>
          <p>Click the block - "slow" component will NOT re-render</p>

          <VerySlowComponent />
        </>
      </ComponentWithClick>
    </>
  );
};

const App = () => {
  return (
    <>
      <h2>Ver en consola la cantidad de renders</h2>
      <p>Re-render should be logged on every click</p>

      <FullComponent />
      <hr />
      <hr />
      <SplitComponent />
    </>
  );
};

export default App;
