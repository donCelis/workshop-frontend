import { useState, useEffect } from "react";
import "./styles.css";

const VerySlowComponent = () => {
  console.log("Very slow component re-renders");
  useEffect(() => {
    console.log("Very slow component re-mounts");
  }, []);
  return <div style={{ marginTop: "20px" }}>Child Very slow component</div>;
};

const Modal = (props: {
  showModal: boolean;
  setShowmodal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log("Render Modal");

  return props.showModal ? (
    <div>
      <p>Modal Component </p>
      <button
        onClick={() => {
          props.setShowmodal(false);
        }}
      >
        clic para cerrar
      </button>
    </div>
  ) : null;
};

const App = () => {
  console.log("Render App");
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <h2>Ver en consola la cantidad de renders</h2>
      <Modal showModal={showModal} setShowmodal={setShowModal} />
      <VerySlowComponent />
    </>
  );
};

export default App;
