import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "./components/Comments";
import Task from "./Task";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/task" element={<Task />} />
        <Route path="/comments/:category/:id" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
