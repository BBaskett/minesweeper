function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export function gridGenerator(height, width, bombs) {
  const gridSize = height * width;
  const bombsArray = new Array(bombs).fill("bomb");
  const emptyArray = new Array(gridSize - bombs).fill("x");
  const gameArray = emptyArray.concat(bombsArray);
  return shuffle(gameArray);
}
