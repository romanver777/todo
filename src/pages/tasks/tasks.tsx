import { useState } from "react";

import TasksItem from "../../components/tasks-item/tasks-item";
import AddProjectModal from "../../components/add-project-modal/add-project-modal";

import "./tasks.scss";

const Tasks = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="main main_mb">
      <div className="tasks">
        <TasksItem
          title="Queue"
          count={3}
          openModal={() => setOpenModal(true)}
        />
        <TasksItem title="Development" count={8} />
        <TasksItem title="Done" count={2} />
      </div>
      <AddProjectModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </main>
  );
};

export default Tasks;
