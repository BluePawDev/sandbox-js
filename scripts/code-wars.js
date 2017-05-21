console.log('source is good!');

function kungfoo(input) {
    var output;
    var a2 = Math.pow(input[0],2);
    var b2 = Math.pow(input[1],2);

    output = Math.sqrt(a2 + b2);

    return output;
}

var y = Math.sqrt(16);
console.log(y);

console.log(kungfoo(50, 20));
