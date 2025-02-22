// import React, { useState } from "react";
// import {
//   DndContext,
//   closestCorners,
//   useSensor,
//   useSensors,
//   PointerSensor,
// } from "@dnd-kit/core";
// import {
//   SortableContext,
//   verticalListSortingStrategy,
//   arrayMove,
// } from "@dnd-kit/sortable";
// import TaskColumn from "./TaskColumn";

// const initialTasks = {
//   todo: [
//     { id: "1", title: "Learn React" },
//     { id: "2", title: "Setup Project" },
//   ],
//   inProgress: [{ id: "3", title: "Build UI" }],
//   done: [{ id: "4", title: "Install Dependencies" }],
// };

// const TaskBoard = () => {
//   const [tasks, setTasks] = useState(initialTasks);

//   // drag event handleling.
//   const onDragEnd = (event) => {
//     const { active, over } = event;

//     // if (!over) return; // jodi drop na hoi.

//     const activeId = active.id;
//     const overId = over.id;

//     // jodi akoi column ar moddhe thake.
//     const sourceColumn = Object.keys(tasks).find((key) =>
//       tasks[key].some((task) => task.id === activeId)
//     );
//     const destinationColumn = Object.keys(tasks).find((key) =>
//       tasks[key].some((task) => task.id === overId)
//     );

//     if (sourceColumn === destinationColumn) {
//       const updatedTasks = [...tasks[sourceColumn]];
//       const oldIndex = updatedTasks.findIndex((task) => task.id === activeId);
//       const newIndex = updatedTasks.findIndex((task) => task.id === overId);
//       const reorderedTasks = arrayMove(updatedTasks, oldIndex, newIndex);

//       setTasks({
//         ...tasks,
//         [sourceColumn]: reorderedTasks,
//       });
//     } else {
//       // jodi onno column a drag kore.
//       const sourceTasks = [...tasks[sourceColumn]];
//       const destinationTasks = [...tasks[destinationColumn]];

//       const movedTask = sourceTasks.find((task) => task.id === activeId);
//       sourceTasks.splice(sourceTasks.indexOf(movedTask), 1);
//       destinationTasks.splice(destinationTasks.indexOf(overId), 0, movedTask);

//       setTasks({
//         ...tasks,
//         [sourceColumn]: sourceTasks,
//         [destinationColumn]: destinationTasks,
//       });
//     }
//   };

//   return (
//     <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
//       <div className="flex gap-5 p-5">
//         {Object.entries(tasks).map(([columnId, columnTasks]) => (
//           <SortableContext
//             key={columnId}
//             items={columnTasks}
//             strategy={verticalListSortingStrategy}
//           >
//             <TaskColumn columnId={columnId} tasks={columnTasks} />
//           </SortableContext>
//         ))}
//       </div>
//     </DndContext>
//   );
// };

// export default TaskBoard;


// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import TaskColumn from "./TaskColumn";

// const fetchTasks = async () => {
//   const res = await fetch("http://localhost:5000/tasks");
//   return res.json();
// };

// const TaskBoard = () => {
//   const queryClient = useQueryClient();
//   const { data: tasks = [], isLoading } = useQuery({
//     queryKey: ["tasks"],
//     queryFn: fetchTasks,
//   });

//   if (isLoading) return <p>Loading tasks...</p>;

//   return (
//     <div className="flex gap-4">
//       <TaskColumn
//         title="To Do"
//         tasks={tasks.filter((task) => task.category === "todo")}
//       />
//       <TaskColumn
//         title="In Progress"
//         tasks={tasks.filter((task) => task.category === "in-progress")}
//       />
//       <TaskColumn
//         title="Done"
//         tasks={tasks.filter((task) => task.category === "done")}
//       />
//     </div>
//   );
// };

// export default TaskBoard;


import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import TaskColumn from "./TaskColumn";

const TaskBoard = () => {
  const queryClient = useQueryClient();
 const {
   data: tasks = [],
   isLoading,
   error,
 } = useQuery({
   queryKey: ["tasks"],
   queryFn: async () => {
     const res = await fetch("https://planova1.vercel.app/tasks");
     const data = await res.json();
    //  console.log("Fetched Tasks:", data);
     return data;
   },
 });

  const moveTaskMutation = useMutation({
    mutationFn: async (updatedTask) => {
      // console.log("Updating Task:", updatedTask);
      await fetch(`https://planova1.vercel.app/tasks/${updatedTask._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });
    },
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  if (isLoading) return <p>Loading tasks...</p>;

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    // console.log(`Dragging from ${active.id} to ${over.id}`);

    const draggedTask = tasks.find((task) => task._id === active.id);
    if (!draggedTask) return;

    moveTaskMutation.mutate({ ...draggedTask, category: over.id });
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex gap-4">
        <SortableContext items={tasks}>
          <TaskColumn
            id="todo"
            title="To Do"
            tasks={tasks.filter((task) => task.category === "todo")}
          />
          <TaskColumn
            id="in-progress"
            title="In Progress"
            tasks={tasks.filter((task) => task.category === "in-progress")}
          />
          <TaskColumn
            id="done"
            title="Done"
            tasks={tasks.filter((task) => task.category === "done")}
          />
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default TaskBoard;
