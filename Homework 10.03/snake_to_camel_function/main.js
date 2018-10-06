function snakeToCamel(line) {
  var start = line.indexOf("_");
  var res = line.replace(line.substr(start, 2), function(x) {
    var cap = x.charAt(1);
    return cap.toUpperCase();
  });
  if (res.includes("_")) {
    return snakeToCamel(res);
  }
  return res;
}

var snake = "var_text_hello";
console.log(snakeToCamel(snake));
