function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function getRandomArray(min, max, length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = getRandomNumber(min, max);
  }
  return arr;
}


function arrayOutput(arr) {
  console.log(arr.shift());
  if (arr.length > 0) {
    arrayOutput(arr);
  }
}

arrayOutput(getRandomArray(1, 1000, 20));
