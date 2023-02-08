//@ts-ignore
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { tasksList } from "./taskList";

const TasksContainer = () => {
  const [tasks, setTasks] = useState(tasksList);

  const handleDragEnd = ({
    destination,
    source
  }: {
    destination: any;
    source: any;
  }) => {
    console.log(destination, source);
    const itemNew = { ...tasks };
    const itemMoved = {
      ...tasks[source.droppableId].items[source.index]
    };
    console.log("ItemMoved>>> ", itemMoved);
    console.log(tasks);
    itemNew[source.droppableId].items.splice(source.index, 1);
    itemNew[destination.droppableId].items.splice(
      destination.index,
      0,
      itemMoved
    );
    setTasks(itemNew);
  };

  return (
    <div className="container">
      {/** --- 👇🏻 DragDropContext  ---- */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <p>Tasking</p>
        {Object.entries(tasks).map((task) => (
          <div
            className={`${task[1].title.toLowerCase()}__wrapper`}
            key={task[1].title}
          >
            <p>{task[1].title}</p>
            <div className={`${task[1].title.toLowerCase()}__container`}>
              <Droppable droppableId={task[1].title}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {task[1].items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`${task[1].title.toLowerCase()}__items`}
                          >
                            <p>{item.title}</p>
                            <p className="comment">
                              <Link to="/comments">
                                {item.comments.length > 0
                                  ? `View Comments`
                                  : "Add Comment"}
                              </Link>
                            </p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
};

export default TasksContainer;
