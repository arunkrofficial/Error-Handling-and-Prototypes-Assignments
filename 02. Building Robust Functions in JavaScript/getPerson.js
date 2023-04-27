function getPerson(person) {
  try {
    if (!person || typeof person !== 'object' || !person.name || !person.age) {
      throw new Error('Invalid parameter type');
    }
    return `Name: ${person.name}, Age: ${person.age}`;
  } catch (error) {
    return error.message;
  }
}

// Testing the function
const person1 = { name: 'Arun Kumar', age: 19 };
console.log(getPerson(person1)); // Output: "Name: John, Age: 30"

const person2 = { name: 'Yug' };
console.log(getPerson(person2)); // Output: "Invalid parameter type"

const person3 = null;
console.log(getPerson(person3)); // Output: "Invalid parameter type"

const person4 = { name: 'Rex', age: undefined };
console.log(getPerson(person4)); // Output: "Invalid parameter type"
