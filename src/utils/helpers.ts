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
