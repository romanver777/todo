import { useState } from "react";
import { useParams } from "react-router-dom";

import useDnd from "../../hooks/use-dnd";

import TasksItem from "../../components/tasks-item/tasks-item";
import TaskCard from "../../components/task-card/task-card";
import AddProjectModal from "../../components/add-project-modal/add-project-modal";
import { TBoards } from "../../types/types";

import { getBoards, getTaskById } from "../../utils/helpers";
import { data } from "../../utils/const";

import "./tasks.scss";

const Tasks = () => {
  const { id } = useParams();
  const columns = id ? getBoards(id, data) : {};

  const [boards, setBoards] = useState<TBoards>(columns);
  const [openModal, setOpenModal] = useState(false);

  const {
    DndContext,
    DragOverlay,
    dropAnimation,
    sensors,
    closestCenter,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    activeTaskId,
  } = useDnd({ boards, setBoards });

  const task = activeTaskId ? getTaskById(boards, activeTaskId) : null;

  if (!id) return null;

  return (
    <main className="main main_mb main_height">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="tasks">
          {Object.keys(boards).map((board) => (
            <TasksItem
              key={board}
              id={board}
              title={board}
              tasks={boards[board]}
              openModal={() => setOpenModal(true)}
            />
          ))}
          <DragOverlay dropAnimation={dropAnimation}>
            {task ? <TaskCard task={task} /> : null}
          </DragOverlay>
        </div>
      </DndContext>
      <AddProjectModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </main>
  );
};

export default Tasks;
