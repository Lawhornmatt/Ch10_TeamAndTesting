// ====================
//   OBJECTS
// ====================

class Employee {

  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  };
  
  getId() {
    return console.log(`Id: ${this.id}`)
  };

  getName() {
    return console.log(`Name: ${this.name}`)
  };

  getEmail() {
    return console.log(`Email: ${this.email}`)
  };

  getRole() {
    return console.log(`Role: Employee`)
  };
};

class Manager extends Employee {

  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  };

  getRole() {
    return console.log(`Role: Manager`)
  };
};

class Engineer extends Employee {

  constructor(id, name, email, ghUsername) {
    super(id, name, email);
    this.ghUsername = ghUsername;
  };

  getGitHub() {
    return console.log(`GitHub USername: ${this.ghUsername}`);
  };

  getRole() {
    return console.log(`Role: Engineer`)
  };
};

class Intern extends Employee {

  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  };

  getSchool() {
    return console.log(`School: ${this.school}`);
  };

  getRole() {
    return console.log(`Role: Intern`)
  };
};

module.exports = {
    Manager,
    Engineer,
    Intern
};