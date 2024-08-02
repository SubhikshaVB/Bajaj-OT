class User {
    constructor(fullName, dob, email, rollNumber) {
      this.fullName = fullName;
      this.dob = dob;
      this.email = email;
      this.rollNumber = rollNumber;
    }
  
    getUserId() {
      return `${this.fullName}_${this.dob}`;
    }
  }
  
  module.exports = User;