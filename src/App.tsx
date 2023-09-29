import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Projects from "./pages/projects/projects";
import Tasks from "./pages/tasks/tasks";
import NotFound from "./pages/not-found/not-found";

import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/project/:id" element={<Tasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
