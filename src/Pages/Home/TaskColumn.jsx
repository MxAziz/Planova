// import React from "react";
// import { useDroppable } from "@dnd-kit/core";
// import TaskItem from "./TaskItem";

// const TaskColumn = ({ columnId, tasks }) => {
//   const { setNodeRef } = useDroppable({ id: columnId });

//   return (
//     <div
//       ref={setNodeRef}
//       className="w-1/3 p-3 border border-gray-700 rounded-md bg-gray-900"
//     >
//       <h2 className="text-lg font-bold text-white capitalize">
//         {columnId.replace(/([A-Z])/g, " $1")}
//       </h2>
//       {tasks.map((task) => (
//         <TaskItem key={task.id} task={task} />
//       ))}
//     </div>
//   );
// };

// export default TaskColumn;


// import TaskItem from "./TaskItem";

// const TaskColumn = ({ title, tasks }) => {
//   return (
//     <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">{title}</h2>
//       {tasks.map((task) => (
//         <TaskItem key={task._id} task={task} />
//       ))}
//     </div>
//   );
// };

// export default TaskColumn;


import { useDroppable } from "@dnd-kit/core";
import TaskItem from "./TaskItem";

const TaskColumn = ({ id, title, tasks }) => {
  const { setNodeRef } = useDroppable({ id });

  console.log(`Column Loaded: ${title} with ID: ${id}`);

  return (
    <div
      ref={setNodeRef}
      className="w-1/3 bg-gray-100 dark:bg-gray-700 dark:text- p-4 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4 dark:text-white">{title}</h2>
      {tasks.length === 0 && (
        <p className="text-gray-400">No tasks available</p>
      )}
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
