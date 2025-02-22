// import React from "react";
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// const TaskItem = ({ task }) => {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id: task.id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       style={style}
//       className="p-3 mt-2 bg-gray-800 text-white rounded-md shadow-md"
//     >
//       {task.title}
//     </div>
//   );
// };

// export default TaskItem;


import { useDraggable } from "@dnd-kit/core";

const TaskItem = ({ task }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: task._id,
  });

  console.log(`Task Draggable: ${task.title}, ID: ${task._id}`);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`bg-white p-3 rounded-md shadow-md mb-2 flex justify-between items-center cursor-pointer ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div>
        <h3 className="font-bold text-lg">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
        <small className="text-gray-500">
          {new Date(task.date).toLocaleDateString()}
        </small>
      </div>
    </div>
  );
};

export default TaskItem;
