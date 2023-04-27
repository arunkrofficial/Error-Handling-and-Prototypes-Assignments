class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
// Get Details
const person1 = new Person("Arun Kumar", 19);
console.log(person1.getDetails()); // Output: “Name: Mithun, Age: 20"

const person2 = new Person();
console.log(person2.getDetails()); // Output: “Name: Unknown, Age: 0”

// Name: Arun Kumar, Age: 19
// Name: Unknown, Age: 0

