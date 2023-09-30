import TasksItem from "../../components/tasks-item/tasks-item";

import "./tasks.scss";

const Tasks = () => {
  return (
    <main className="main main_mb">
      <div className="tasks">
        <TasksItem title="Queue" count={3} />
        <TasksItem title="Development" count={8} />
        <TasksItem title="Done" count={2} />
      </div>
    </main>
  );
};

export default Tasks;
