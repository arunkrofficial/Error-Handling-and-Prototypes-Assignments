class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    getPassword() {
      return this._password.replace(/./g, '*');
    }
  
    setPassword(newPassword) {
      const regex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
      if (regex.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error('Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      }
    }
  }
  
  // Example usage:
  const user = new User("Arun Kumr", "Password123");
  console.log(user.getPassword()); // **********
  
  user.setPassword("myPassword"); // Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
  
  user.setPassword("MyPassword"); // Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
  
  user.setPassword("Mypassword123");
  console.log(user.getPassword()); // *************
  