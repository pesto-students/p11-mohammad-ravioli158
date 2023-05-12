/*
 * Class 'Person' creates object with basic details of a person
 * Instance of this class have a name, gender , age and nationality
 */
class Person {
  /* Creates an instance of Person class with name, age, gender and nationality
    @param {string} name 
    @param {number} age 
    @param {string} gender
    @param {string} nationality */
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }
  /* Returns a string with all the details of the person
  @returns {string} */
  introduce() {
    return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender},and I am from ${this.nationality}`;
  }
}

// Create three instances of Person classes
const person1 = new Person("Aman", 15, "Male", "India");
const person2 = new Person("Sasha", 19, "Male", "Russian");
const person3 = new Person("Anna", 45, "Female", "Ukraine");

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

/* Class Student has details of student. 
It extends Person class and has subject property */
class Student extends Person {
  /*  Creates an instance of Student class 
    @param {string} name 
    @param {number} age 
    @param {string} gender
    @param {string} nationality
    @param {string} subject - The subject student studies */
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }
  /*  returns the subject
  @returns {string} */
  study() {
    return `I am studying ${this.subject}`;
  }
}

const student1 = new Student("Arnav", "12", "Male", "India", "English");
console.log(student1.introduce());
console.log(student1.study());
