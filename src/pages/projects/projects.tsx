import ProjectsItem from "../../components/projects-item/projects-item";

import { data } from "../../utils/const";

import "./projects.scss";

export type TProjectItem = {
  id: number;
  name: string;
  description: string;
  count: number;
  done: number;
};

const Projects = () => {
  return (
    <main className="main">
      <div className="projects__head">
        <div className="projects__head-wrap">
          <div className="projects__title">Мои проекты</div>
          <div className="projects__count">Всего: {data.length}</div>
        </div>
        <button className="btn">Создать проект</button>
      </div>
      <ul className="projects__list">
        {[...data].reverse().map((project, index) => (
          <ProjectsItem key={project.name} item={project} index={index} />
        ))}
      </ul>
    </main>
  );
};

export default Projects;
