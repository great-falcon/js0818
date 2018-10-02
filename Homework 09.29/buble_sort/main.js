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

var arrayForSort = getRandomArray(-100, 100, 20);
console.log(arrayForSort);
for (var i = 0, k; i < arrayForSort.length; i++) {
  for (var j = arrayForSort.length - 1; j > i; j--) {
    if (arrayForSort[j - 1] > arrayForSort[j]) {
      k = arrayForSort[j - 1];
      arrayForSort[j - 1] = arrayForSort[j];
      arrayForSort[j] = k;
    }
  }
}
alert(arrayForSort);
