import React from "react";
import AddTask from "./components/AddTask";
import TasksContainer from "./components/TaskContainer";
import Nav from "./components/Nav";

const Task = () => {
  return (
    <div>
      <Nav />
      <AddTask />
      <TasksContainer />
    </div>
  );
};

export default Task;
