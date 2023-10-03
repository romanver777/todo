import { TBoards, TProjectItem } from "../types/types";

export const getColorByLetter = (name: string, colors: string[]) => {
  const letter = name[0].toLowerCase();
  const code = letter.charCodeAt(0);

  const lastLetterRus = 1103;
  const lastLetterEng = 122;

  let index = 0;

  if (code > lastLetterEng) {
    index = Math.floor((lastLetterRus - code) / colors.length) - 1;
  } else {
    index = Math.floor((lastLetterEng - code) / colors.length) - 1;
  }

  return index > 0 ? colors[index] : colors[colors.length - 1];
};

export const getPriorityName = (priority: string) => {
  let result;
  switch (priority) {
    case "low":
      result = "Низкий";
      break;
    case "high":
      result = "Высокий";
      break;
    default:
      result = "done";
      break;
  }
  return result;
};

export const getTasksCount = (boards: TBoards) => {
  // export const getTasksCount = (boards: TBoard[]) => {
  // return boards.reduce((a, board) => board.tasks.length + a, 0);
  return Object.keys(boards).reduce((a, items) => items.length + a, 0);
};

export const getDoneTasksCount = (boards: TBoards, name: string) => {
  // return boards[2].tasks.length;
  return boards[name].length;
};

export const getBoards = (id: string, data: TProjectItem[]) => {
  return data.filter((project) => project.id === +id)[0].boards;
};

export const getTaskById = (boards: TBoards, id: string) => {
  return Object.keys(boards)
    .map((key) => boards[key])
    .flat()
    .filter((item) => item.id === +id)[0];
};

export const getBoardName = (boards: TBoards, id: string) => {
  if (id in boards) return id;

  return Object.keys(boards).find((key) =>
    boards[key].find((item) => item.id === +id)
  );
};
