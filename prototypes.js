

// START Drill constructor
function Drill(inUse, isCharged, bitType, bitSize, rotation){
  this.statusUse = inUse;
  this.statusCharge = isCharged;
  this.bitType = bitType;
  this.bitSize = bitSize;
  this.rotation = rotation;
  this.status = function () {
    if (statusCharged === false){
      console.log("The drill needs to be charged");
    } else if (statusInUse === true) {
      console.log("The drill is charged, but someone is using it with a " + bitSize + bitType + " bit");
    } else {
      console.log("The drill is charged and available--have fun!");
    }
  };
} // END Drill constructor

var myDrill = new Drill(true, true, "masonry", 0.375, "clockwise");

console.log(myDrill);
