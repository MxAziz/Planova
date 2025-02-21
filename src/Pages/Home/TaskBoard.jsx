import React, { useState } from "react";
import {
  DndContext,
  closestCorners,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import TaskColumn from "./TaskColumn";

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

  // drag event handleling.
  const onDragEnd = (event) => {
    const { active, over } = event;

    // if (!over) return; // jodi drop na hoi.

    const activeId = active.id;
    const overId = over.id;

    // jodi akoi column ar moddhe thake.
    const sourceColumn = Object.keys(tasks).find((key) =>
      tasks[key].some((task) => task.id === activeId)
    );
    const destinationColumn = Object.keys(tasks).find((key) =>
      tasks[key].some((task) => task.id === overId)
    );

    if (sourceColumn === destinationColumn) {
      const updatedTasks = [...tasks[sourceColumn]];
      const oldIndex = updatedTasks.findIndex((task) => task.id === activeId);
      const newIndex = updatedTasks.findIndex((task) => task.id === overId);
      const reorderedTasks = arrayMove(updatedTasks, oldIndex, newIndex);

      setTasks({
        ...tasks,
        [sourceColumn]: reorderedTasks,
      });
    } else {
      // jodi onno column a drag kore.
      const sourceTasks = [...tasks[sourceColumn]];
      const destinationTasks = [...tasks[destinationColumn]];

      const movedTask = sourceTasks.find((task) => task.id === activeId);
      sourceTasks.splice(sourceTasks.indexOf(movedTask), 1);
      destinationTasks.splice(destinationTasks.indexOf(overId), 0, movedTask);

      setTasks({
        ...tasks,
        [sourceColumn]: sourceTasks,
        [destinationColumn]: destinationTasks,
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
      <div className="flex gap-5 p-5">
        {Object.entries(tasks).map(([columnId, columnTasks]) => (
          <SortableContext
            key={columnId}
            items={columnTasks}
            strategy={verticalListSortingStrategy}
          >
            <TaskColumn columnId={columnId} tasks={columnTasks} />
          </SortableContext>
        ))}
      </div>
    </DndContext>
  );
};

export default TaskBoard;
