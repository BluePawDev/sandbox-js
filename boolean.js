console.log("Good connection!");

// This function--happyBool()--returns the same as the function below it--myBool()--but,
// happyBool() is more efficient in that the function is only three lines of code
// whereas myBool() is seven lines of code and must evaluate through an IF...ELSE statement
var myTrueFalse = true;

function happyBool(myBoolean) {
  return !myBoolean;
}

console.log(happyBool(myTrueFalse));


var programming = false;

var myBool = function() {
  if (programming !== true){
      return true;
  } else {
      return false;
    }
};

console.log(myBool(programming));
