/*  Section 1 Inheritance
 This example shows how to define classes in JavaScript using the "class" keyword and
 how to use inheritance to create new classes that build upon existing ones.
 The code defines a Vehicle class, a Car class that extends the Vehicle class, 
and a RideShareCar class that extends the Car class. */

class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${make} ${model}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

// Section 2 Polymorphism

class Shape {
  calculateArea() {}
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const aTriangle = new Triangle(10, 12);
console.log(aTriangle.calculateArea());

const aRectangle = new Rectangle(10, 12);
console.log(aRectangle.calculateArea());

const aCircle = new Circle(5);
console.log(aCircle.calculateArea());

// Section 3 Abstraction and encapsulation

class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;
  constructor(accountNumber, balance, accountHolderName) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.accountNumber = accountHolderName;
  }
  getBalance() {
    return this.balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  deposite(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (this.balance - amount < 0) {
      throw new Error("Not enough amount in account");
    } else {
      this.balance -= amount;
    }
  }
}

try {
  const savingsAccount = new SavingsAccount(1, 1000, "Ravi");
  console.log(savingsAccount.getBalance());
  savingsAccount.deposit(5000);
  console.log(savingsAccount.getBalance());
  savingsAccount.withdraw(1000);
  console.log(savingsAccount.getBalance());
  // savingsAccount.withdraw(15000);
  // console.log(savingsAccount.getBalance());

  const checkingAccount = new CheckingAccount(2, 1000, "Ravi");
  checkingAccount.deposite(2000);
  console.log(checkingAccount.getBalance());
  checkingAccount.withdraw(1000);
  console.log(checkingAccount.getBalance());
  checkingAccount.withdraw(10000);
  console.log(checkingAccount.getBalance());
} catch (error) {
  console.log(error);
}
