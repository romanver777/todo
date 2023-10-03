import { useState } from "react";

import AddProjectModal from "../../components/add-project-modal/add-project-modal";
import ProjectsItem from "../../components/projects-item/projects-item";

import { data } from "../../utils/const";

import "./projects.scss";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="main">
      <div className="projects__head">
        <div className="projects__head-wrap">
          <div className="projects__title">Мои проекты</div>
          <div className="projects__count">Всего: {data.length}</div>
        </div>
        <button className="btn" onClick={() => setOpenModal(true)}>
          Создать проект
        </button>
        <AddProjectModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
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
