import { useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverEvent,
  DropAnimation,
  defaultDropAnimation,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { getBoardName } from "../utils/helpers";
import { TBoards } from "../types/types";

type TProps = {
  boards: TBoards;
  setBoards: React.Dispatch<React.SetStateAction<TBoards>>;
};

const useDnd = ({ boards, setBoards }: TProps) => {
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveTaskId(active.id as string);
  };

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    const activeBoardName = getBoardName(boards, active.id as string);
    const overBoardName = getBoardName(boards, over?.id as string);

    if (
      !activeBoardName ||
      !overBoardName ||
      activeBoardName === overBoardName
    ) {
      return;
    }

    setBoards((allBoards) => {
      const activeItems = allBoards[activeBoardName];
      const overItems = allBoards[overBoardName];

      const activeIndex = activeItems.findIndex(
        (item) => item.id === active.id
      );
      const overIndex = overItems.findIndex((item) => item.id !== over?.id);

      if (allBoards[overBoardName].length === 1) {
        return {
          ...allBoards,
          [activeBoardName]: [
            ...allBoards[activeBoardName].filter(
              (item) => item.id !== active.id
            ),
          ],
          [overBoardName]: [
            ...allBoards[overBoardName],
            boards[activeBoardName][activeIndex],
          ],
        };
      }

      return {
        ...allBoards,
        [activeBoardName]: [
          ...allBoards[activeBoardName].filter((item) => item.id !== active.id),
        ],
        [overBoardName]: [
          ...allBoards[overBoardName].slice(0, overIndex),
          boards[activeBoardName][activeIndex],
          ...allBoards[overBoardName].slice(overIndex),
        ],
      };
    });
  };

  const handleDragEnd = ({ active, over }: any) => {
    const activeBoardName = Object.keys(boards).find((key) =>
      boards[key].find((item) => item.id === active.id)
    );
    const overBoardName = Object.keys(boards).find((key) =>
      boards[key].find((item) => item.id === over?.id)
    );

    if (
      !activeBoardName ||
      !overBoardName ||
      activeBoardName !== overBoardName
    ) {
      return;
    }

    const activeIndex = boards[activeBoardName].findIndex(
      (task) => task.id === active.id
    );
    const overIndex = boards[overBoardName].findIndex(
      (task) => task.id === over?.id
    );

    if (activeIndex !== overIndex) {
      setBoards((allBoards) => ({
        ...allBoards,
        [overBoardName]: arrayMove(
          allBoards[overBoardName],
          activeIndex,
          overIndex
        ),
      }));
    }

    setActiveTaskId(null);
  };

  const dropAnimation: DropAnimation = {
    ...defaultDropAnimation,
  };

  return {
    DndContext,
    DragOverlay,
    dropAnimation,
    sensors,
    closestCenter,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    activeTaskId,
  };
};

export default useDnd;
