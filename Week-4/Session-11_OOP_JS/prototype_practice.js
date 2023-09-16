// Protecting the object

const person = {};

// Create read only property name and email

Object.defineProperty(person, "name", {
  value: "Anna",
  writable: false,
  enumerable: true,
});

Object.defineProperty(person, "email", {
  writable: false,
  value: "anna@gmail.com",
  enumerable: true,
});

// Add age as write only property
// TODO: understand 'write only'
Object.defineProperty(person, "age", {
  value: 21,
  writable: true,
});

// getAge to return the age property
Object.defineProperty(person, "getAge", {
  value: function () {
    return this.age;
  },
});

// setAge() to update the age value
Object.defineProperty(person, "setAge", {
  value: function (newAge) {
    this.age = newAge;
  },
});

console.log(person);
console.log(person.age);
console.log(person.getAge());
person.setAge(12);
console.log(person.getAge());
// Try to modify email
person.email = "tset@gmai.com";
console.log(person);

// JavaScript Prototype

const vehicle = {
  make: "Honda",
  model: "Accord",
  year: 2008,
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  },
};

const car = Object.create(vehicle);
car.numDoor = 4;
car.getDetails = function () {
  return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year} and No. Doors: ${this.numDoor}`;
};
console.log(car.getDetails());

// Using class
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

// Extend Vehicle class

class Car extends Vehicle {
  constructor(make, model, year, numDoor) {
    super(make, model, year);
    this.numDoor = numDoor;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

const honda_accord = new Car("Honda", "Accord", 2009, 4);
console.log(honda_accord);
