export type TTask = {
  id: number;
  title: string;
  priority: string;
  description: string;
};

export type TBoards = {
  [name: string]: TTask[];
};

export type TProjectItem = {
  id: number;
  name: string;
  description: string;
  boards: TBoards;
};
