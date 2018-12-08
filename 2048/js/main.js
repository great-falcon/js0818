let createAndAppend = function(
  { className, parrentElement, value },
  tag = "div"
) {
  let element = document.createElement(tag);
  element.classList.add(className);
  if (value) {
    element.textContent = value;
  }
  parrentElement.appendChild(element);

  return element;
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveRow(row) {
  let changed = false;
  if (!row.every(cellInRow => !cellInRow.value)) {
    for (let i = 0; i < row.length; i++) {
      if (!row[i].value) {
        for (let j = i + 1; j < row.length; j++) {
          if (row[j].value) {
            row[i].merge(row[j]);
            changed = true;
            i--;
            break;
          }
        }
      } else {
        for (let j = i + 1; j < row.length; j++) {
          if (row[j].value) {
            if (row[j].value == row[i].value) {
              row[i].merge(row[j], true);
              changed = true;
            }
            break;
          }
        }
      }
    }
  }
  return changed;
}

let storage = localStorage;
const STORAGE_NAME = "bestRating2048";

let game = new Game(document.body, 4);
