//  Create an Employee Class
class Employee {
    constructor(name, salary, position, department) { // making a class of employee properties
        this.name = name;  
        this.salary = salary;   
        this.position = position; 
        this.department = department; 
    }

     getDetails() {
        return(`${this.name} works as a ${this.position} earning a Salary of: $${this.salary} annually`); // Method to get employee details as an organized string
    }
}
