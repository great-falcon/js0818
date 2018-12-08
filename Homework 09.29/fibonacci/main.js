var fibonacciNumberCount = +prompt("Enter the number of Fibonacci series");
var fibonacciSeries = new Array(1, 2);
for (var i = 2; i < fibonacciNumberCount; i++) {
  fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
}
console.log(fibonacciSeries);
alert(fibonacciSeries[fibonacciSeries.length - 1]);
