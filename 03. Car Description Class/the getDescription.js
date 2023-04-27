class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}.`;
    }
  }
  
  // Instantiating an instance of the Car class
  const myCar = new Car('Mahindra', 'Thar', 2023);
  
  // Calling the getDescription method
  console.log(myCar.getDescription());
  // Output: This is a 2022 Skoda Rapid.
  