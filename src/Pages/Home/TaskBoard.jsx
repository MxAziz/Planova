import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = {
  todo: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Setup Project" },
  ],
  inProgress: [{ id: "3", title: "Build UI" }],
  done: [{ id: "4", title: "Install Dependencies" }],
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return; // যদি ড্রপ করা না হয়

    const sourceColumn = source.droppableId;
    const destinationColumn = destination.droppableId;

    const sourceTasks = [...tasks[sourceColumn]];
    const destinationTasks = [...tasks[destinationColumn]];

    const [movedTask] = sourceTasks.splice(source.index, 1);

    destinationTasks.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [sourceColumn]: sourceTasks,
      [destinationColumn]: destinationTasks,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-5 p-5">
        {Object.entries(tasks).map(([columnId, columnTasks]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/3 p-3 border border-gray-700 rounded-md bg-gray-900"
              >
                <h2 className="text-lg font-bold text-white capitalize">
                  {columnId.replace(/([A-Z])/g, " $1")}
                </h2>
                {columnTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-3 mt-2 bg-gray-800 text-white rounded-md shadow-md"
                      >
                        {task.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
