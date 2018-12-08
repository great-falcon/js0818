var a = +prompt('Please enter coeficient a', '');
var b = +prompt('Please enter coeficient b', '');
var c = +prompt('Please enter coeficient c', '');

if(a !== a || b !== b || c !== c){
    alert('One of coeficients is not a number');
}
else{
    var discriminant = Math.pow(b, 2) - 4 * a * c;
    if(discriminant > 0){
        var x1 = (-1*b+Math.sqrt(discriminant))/(2*a);
        var x2 = (-1*b-Math.sqrt(discriminant))/(2*a);
        alert('There are two real roots:\nx1 = ' + x1 + ';\nx2 = ' + x2);
    }
    else if(discriminant === 0){
        var x1 = -1*b/(2*a);
        alert('There is one real root: x1 = ' + x1);
    }
    else{
        alert('function has no real roots');
    }
    

}

// aler'Вам ' + years + ' лет!')t(