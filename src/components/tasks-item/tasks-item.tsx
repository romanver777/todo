import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import TaskCard from "../task-card/task-card";
import { TTask } from "../../types/types";
import { boardsNames } from "../../utils/const";

import "./tasks-item.scss";

type TProps = {
  id: string;
  title: string;
  tasks: TTask[];
  openModal?: () => void;
};

const TasksItem = ({ id, title, tasks, openModal }: TProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className="tasks__item">
      <header className={`tasks__header tasks__header_${title.toLowerCase()}`}>
        <div className={`header_left header_left_${title.toLowerCase()}`}>
          <h3 className="tasks__title">{title}</h3>
          <div className="tasks__count">{tasks.length}</div>
        </div>
        {title === boardsNames[0] && (
          <button className="tasks__add" onClick={openModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                className="add__icon"
                opacity="0.2"
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                fill="#5030E5"
              />
              <path
                d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
                fill="#5030E5"
              />
            </svg>
          </button>
        )}
      </header>
      <SortableContext
        id={id}
        items={tasks}
        strategy={verticalListSortingStrategy}
      >
        <div className="tasks__body" ref={setNodeRef}>
          <div className="tasks__list">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} boardName={title} />
            ))}
          </div>
        </div>
      </SortableContext>
    </div>
  );
};

export default TasksItem;
