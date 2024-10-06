// Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;          // Employee name
        this.salary = salary;      // Employee salary
        this.position = position;  // Employee position 
        this.department = department; // Employee's department name
    }
    
    getDetails() {
        return(`${this.name} works as a ${this.position} earning a Salary of: $${this.salary} annually`); // Method to get employee details as a formatted string
    }
}