import { useState, useEffect } from "react";

import { TProjectItem } from "../../pages/projects/projects";

import { getColorByLetter } from "../../utils/helpers";
import { colors } from "../../utils/const";

import "./progress-project.scss";

type TProps = {
  index: number;
  item: TProjectItem;
};

const ProgressProject = ({ index, item }: TProps) => {
  const [width, setWidth] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      setWidth(`${Math.floor((item.done / item.count) * 100)}%`);
    }, 100 * index);
  });

  const colorStyle = getColorByLetter(item.name, colors);
  const doneStyle = { color: colorStyle };
  const trackStyle = {
    width: width,
    backgroundColor: colorStyle,
  };

  return (
    <div className="project-progress">
      <div className="project__task-count">
        <span style={doneStyle}>
          {item.done}&nbsp;
        </span>
        <span>/ {item.count}</span>
      </div>
      <div className="progress">
        <div className="progress__body" />
        <div className="progress__track" style={trackStyle} />
      </div>
    </div>
  );
};

export default ProgressProject;
