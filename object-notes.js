
// Object Literal
var car = {
  make: 'Ford',
  model: 'Taurus',
  color: 'Blue',
  year: new Date ('1/1/1996'), // Date is a JS built-in
  'cruise-control': true
};

console.log('make', car.make); // accessing a property in an object

console.log('model', car['model']); // alternate way to access property

// a case


// Constructor Function
function Car(make, model, color, year) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.year = year;
  // this.'cruise-control' = true; // NO-GO
  // this.['cruise-control'] = true; // NO-GO
  this.crusieControl = true; // YES
}

// Make Objects using constructor function

var newCar = new Car('Subaru', 'Outback', 'Orange Blue Silver', new Date('5/17/2017'));
var otherCar =  new Car();

console.log('newCar', newCar); // using constructor to create the obj defines the obj type (e.g. 'Car') <-- this is more intential about the obj being created
console.log(car); // versus using obj literal to create an obj defines the obj type generically (e.g. 'Object')

// Prototypes
// Start with the name of the...

Car.prototype.toString = function () {
  return this.make + ' ' + this.model + ' ' + this.color + ' ' + this.year;  // "this." always refers to the object being created
}

Car.prototype.dueForService = function (){
  if(this.year > new Date('1/4/2010')){
    return true;
  } else {
    return false;
  };
}

console.log('here is my car', newCar.toString( ));
console.log('newCar.dueForService', newCar.dueForService());
console.log('is my car due for service:', newCar.dueForService());
