import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { boardsNames } from "../../utils/const";
import { TTask } from "../../types/types";

import dotsIcon from "../../assets/icons/dots.svg";
import "./task-card.scss";

type TProps = {
  task: TTask;
  boardName?: string;
};

const TaskCard = ({ task, boardName }: TProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
  };

  const priorityName =
    boardName === boardsNames[2] ? boardsNames[2].toLowerCase() : task.priority;

  return (
    <div
      className="task__card"
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div className="tcard__header">
        <div className={`tcard__priority tcard__priority_${priorityName}`}>
          {priorityName}
        </div>
        <button className="btn__dots">
          <img src={dotsIcon} alt="меню заметки" className="dots-icon" />
        </button>
      </div>
      <div className="tcard__content">
        <div className="tcard__title">{task.title}</div>
        <div className="tcard__description">{task.description || ""}
        </div>
      </div>
      <div className="tcard__footer">
        <div className="tcard__comments">{5} комментариев</div>
        <div className="tcard__date">30-09-2023</div>
      </div>
    </div>
  );
};

export default TaskCard;
