import { useState, useEffect } from "react";
import Tabs from "./tabs";

const App = () => {
  const [activeTabs, setActiveTabs] = useState<"tab1" | "tab2">("tab1");

  const VerySlowComponent = () => {
    console.log("Very slow component re-renders");
    useEffect(() => {
      console.log("Very slow component re-mounts");
    }, []);
    return <div style={{ marginTop: "20px" }}>Child Very slow component</div>;
  };

  return (
    <>
      <h2>Estoy teniendo problemas de rendimiento, ayudame please 🥹 </h2>
      <Tabs activeTab={activeTabs} setActiveTab={setActiveTabs} />
      <VerySlowComponent />
    </>
  );
};

export default App;
