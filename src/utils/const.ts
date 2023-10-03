import { TProjectItem } from "../types/types";

export const boardsNames = ["Queue", "Development", "Done"];

export const colors = [
  "#545dad",
  "#FD7B38",
  "#2EB67D",
  "#E257B3",
  "#A384DB",
  "#7ED3E9",
];

export const data: TProjectItem[] = [
  {
    id: 1,
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
    boards: {
      Queue: [
        {
          id: 20,
          title: "Сделать задание №20",
          priority: "low",
          description:
            "Есть два значения <length>, отвечающие за смещения тени.",
        },
        {
          id: 1,
          title: "Сделать задание №1",
          priority: "high",
          description: "",
        },
        {
          id: 2,
          title: "Сделать задание №2",
          priority: "high",
          description:
            "Если не указано (по умолчанию), то тень будет отбрасываться от элемента (придавая эффект выпуклости блоку)",
        },
      ],
      Development: [
        {
          id: 8,
          title: "Сделать задание №8",
          priority: "high",
          description:
            "для длинного прямого края тени должен быть создан цветовой переход, равный длине расстояния размытия, который перпендикулярен и центрирован по краю тени.",
        },
        {
          id: 3,
          title: "Сделать задание №3",
          priority: "high",
          description: "",
        },
        {
          id: 4,
          title: "Сделать задание №4",
          priority: "high",
          description: "",
        },
      ],
      Done: [
        {
          id: 6,
          title: "Сделать задание №6",
          priority: "high",
          description: "",
        },
        {
          id: 5,
          title: "Сделать задание №5",
          priority: "high",
          description: "",
        },
        {
          id: 7,
          title: "Сделать задание №7",
          priority: "high",
          description:
            "Смотрите страницу по <color> для получения допустимых значений.",
        },
      ],
    },
  },
];
