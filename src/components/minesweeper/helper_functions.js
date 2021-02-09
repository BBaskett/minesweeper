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

  return array.map((value, index) => {
    if (value === "*") {
      return value;
    } else {
      //Edge Cases
      switch (index) {
        case 0:
          // E
          if (array[index + 1] === "*") {
            value = value + 1;
          }
          // SE
          if (array[index + 9] === "*") {
            value = value + 1;
          }
          // S
          if (array[index + 8] === "*") {
            value = value + 1;
          }
          break;

        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          // E
          if (array[index + 1] === "*") {
            value = value + 1;
          }
          // SE
          if (array[index + 9] === "*") {
            value = value + 1;
          }
          // S
          if (array[index + 8] === "*") {
            value = value + 1;
          }
          //SW
          if (array[index + 7] === "*") {
            value = value + 1;
          }
          // W
          if (array[index - 1] === "*") {
            value = value + 1;
          }
          break;

        case 7:
          // S
          if (array[index + 8] === "*") {
            value = value + 1;
          }
          //SW
          if (array[index + 7] === "*") {
            value = value + 1;
          }
          // W
          if (array[index - 1] === "*") {
            value = value + 1;
          }
          break;

        case 8:
        case 16:
        case 24:
        case 32:
        case 40:
        case 48:
          // E
          if (array[index + 1] === "*") {
            value = value + 1;
          }
          // SE
          if (array[index + 9] === "*") {
            value = value + 1;
          }
          // S
          if (array[index + 8] === "*") {
            value = value + 1;
          }
          // N
          if (array[index - 8] === "*") {
            value = value + 1;
          }
          // NE
          if (array[index - 7] === "*") {
            value = value + 1;
          }
          break;

        case 15:
        case 23:
        case 31:
        case 39:
        case 47:
        case 55:
          // S
          if (array[index + 8] === "*") {
            value = value + 1;
          }
          //SW
          if (array[index + 7] === "*") {
            value = value + 1;
          }
          // W
          if (array[index - 1] === "*") {
            value = value + 1;
          }
          // NW
          if (array[index - 9] === "*") {
            value = value + 1;
          }
          // N
          if (array[index - 8] === "*") {
            value = value + 1;
          }
          break;

        case 56:
          // E
          if (array[index + 1] === "*") {
            value = value + 1;
          }
          // N
          if (array[index - 8] === "*") {
            value = value + 1;
          }
          // NE
          if (array[index - 7] === "*") {
            value = value + 1;
          }
          break;

        case 57:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
          // E
          if (array[index + 1] === "*") {
            value = value + 1;
          }
          // W
          if (array[index - 1] === "*") {
            value = value + 1;
          }
          // NW
          if (array[index - 9] === "*") {
            value = value + 1;
          }
          // N
          if (array[index - 8] === "*") {
            value = value + 1;
          }
          // NE
          if (array[index - 7] === "*") {
            value = value + 1;
          }
          break;

        case 63:
          // W
          if (array[index - 1] === "*") {
            value = value + 1;
          }
          // NW
          if (array[index - 9] === "*") {
            value = value + 1;
          }
          // N
          if (array[index - 8] === "*") {
            value = value + 1;
          }
          break;

        default:
          // E
          if (array[index + 1] === "*") {
            value = value + 1;
          }
          // SE
          if (array[index + 9] === "*") {
            value = value + 1;
          }
          // S
          if (array[index + 8] === "*") {
            value = value + 1;
          }
          //SW
          if (array[index + 7] === "*") {
            value = value + 1;
          }
          // W
          if (array[index - 1] === "*") {
            value = value + 1;
          }
          // NW
          if (array[index - 9] === "*") {
            value = value + 1;
          }
          // N
          if (array[index - 8] === "*") {
            value = value + 1;
          }
          // NE
          if (array[index - 7] === "*") {
            value = value + 1;
          }
      }
      return value;
    }
  });
}

export function gridGenerator(height, width, bombs) {
  const gridSize = height * width;
  const bombsArray = new Array(bombs).fill("*");
  const emptyArray = new Array(gridSize - bombs).fill(0);
  const gameArray = emptyArray.concat(bombsArray);
  return shuffle(gameArray);
}
