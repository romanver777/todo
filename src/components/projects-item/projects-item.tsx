import { Link } from "react-router-dom";

import ProgressProject from "../progress-project/progress-project";
import { TProjectItem } from "../../types/types";
import { getTasksCount, getDoneTasksCount } from "../../utils/helpers";

import "./projects-item.scss";

type TProps = {
  item: TProjectItem;
  index: number;
  key: string;
};

const ProjectsItem = ({ item, index }: TProps) => {
  return (
    <li className="projects__item">
      <Link to={`/project/${item.id}`} className="project__link">
        <button className="menu-dots">...</button>
        <div className="project__item-content">
          <div className="project__name">{item.name}</div>
          <div className="project__description">{item.description}</div>
        </div>
        <ProgressProject
          index={index}
          name={item.name}
          count={getTasksCount(item.boards)}
          done={getDoneTasksCount(item.boards, "Done")}
        />
      </Link>
    </li>
  );
};

export default ProjectsItem;
