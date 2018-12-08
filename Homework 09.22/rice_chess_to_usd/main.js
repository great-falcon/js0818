var chessSize = 8;
var aruzzaWeight = 0.0919;
var riceCount = 1;
var riceCoast = 425;
for(var i=1; i<Math.pow(chessSize, 2); i++){
    riceCount *= 2;
}
var riceWeightInTon = riceCount * aruzzaWeight / 1000000;
var profit = riceWeightInTon * riceCoast;

alert('мудрец получил: ' + riceCount + ' рисовых зерен\n' +
        'что ровняется ' + riceWeightInTon + ' тоннам\n' + 
        'стоимостью ' + profit + '$');