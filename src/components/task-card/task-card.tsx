import { getPriorityName } from "../../utils/helpers";

import dotsIcon from "../../assets/icons/dots.svg";
import "./task-card.scss";

type TProps = {
  priority: string;
};

const TaskCard = ({ priority }: TProps) => {
  return (
    <div className="task__card">
      <div className="tcard__header">
        <div className={`tcard__priority tcard__priority_${priority}`}>
          {getPriorityName(priority)}
        </div>
        <button className="btn__dots">
          <img src={dotsIcon} alt="меню заметки" className="dots-icon" />
        </button>
      </div>
      <div className="tcard__content">
        <div className="tcard__title">Набор слов</div>
        <div className="tcard__description">
          Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский
          набор слов, но это не совсем так.
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
