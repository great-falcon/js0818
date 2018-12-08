function sumDigits(num) {
  var str = String(num);
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += +str.charAt(i);
  }
  if (str.length > 1) {
    return sumDigits(sum);
  }
  return sum;
}

console.log(sumDigits(12969989696985));
