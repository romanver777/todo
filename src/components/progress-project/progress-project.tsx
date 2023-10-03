import { useState, useEffect } from "react";

import { getColorByLetter } from "../../utils/helpers";
import { colors } from "../../utils/const";

import "./progress-project.scss";

type TProps = {
  index: number;
  name: string;
  count: number;
  done: number;
};

const ProgressProject = ({ index, name, count, done }: TProps) => {
  const [width, setWidth] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      setWidth(`${Math.floor((done / count) * 100)}%`);
    }, 100 * index);
  });

  const colorStyle = getColorByLetter(name, colors);
  const doneStyle = { color: colorStyle };
  const trackStyle = {
    width: width,
    backgroundColor: colorStyle,
  };

  return (
    <div className="project-progress">
      <div className="project__task-count">
        <span style={doneStyle}>
          {done}&nbsp;
        </span>
        <span>/ {count}</span>
      </div>
      <div className="progress">
        <div className="progress__body" />
        <div className="progress__track" style={trackStyle} />
      </div>
    </div>
  );
};

export default ProgressProject;
