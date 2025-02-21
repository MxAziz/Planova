import React from "react";
import { useDroppable } from "@dnd-kit/core";
import TaskItem from "./TaskItem";

const TaskColumn = ({ columnId, tasks }) => {
  const { setNodeRef } = useDroppable({ id: columnId });

  return (
    <div
      ref={setNodeRef}
      className="w-1/3 p-3 border border-gray-700 rounded-md bg-gray-900"
    >
      <h2 className="text-lg font-bold text-white capitalize">
        {columnId.replace(/([A-Z])/g, " $1")}
      </h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
