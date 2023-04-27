// Create prototype object called Student
let Student = function(name) {
    this.name = name;
  };
  
  // Add printDetails method to Student prototype
  Student.prototype.printDetails = function() {
    console.log(`Hello, the student is ${this.name}`);
  };
  
  // Instantiate a Student object with name "Mithun"
  const student = new Student("Arun Kumar");
  
  // Call the printDetails method
  student.printDetails(); // Outputs: "Hello, the student is Arun Kumar"
  