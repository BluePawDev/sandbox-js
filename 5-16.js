console.log('JS source good!');

// variables to use in testing when in console
var testy = true;
  // can change data type of vars on the fly

console.log(typeof(testy));

parseInt(testy); // returns interger (whole number)
console.log(typeof(parseInt(testy)));

Number(testy); // retruns a number
console.log(typeof(Number(testy)));

String(testy);
console.log(String(testy));

testy.toString(testy);
console.log(typeof(testy.toString(testy)));

testy = "Zoltreastou Synaptical";

testy.substring(3,5);
console.log(testy.substring(3));
console.log(testy.substring(3,17));


// NaN is a number that is Not a Number

var tester;

testy.split('y');
// splits at designated character, retruns as an array w/o designated character



var cardDeck = [];

var card = '4 of Spades';

// .push(); // adds to end of array
// .unshift() // add to begining of array
// .pop() // takes off last index in array
// .shift() // takes first index from array
