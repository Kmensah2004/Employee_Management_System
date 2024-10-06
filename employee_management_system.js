// Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;          // Employee name
        this.salary = salary;      // Employee salary
        this.position = position;  // Employee position 
        this.department = department; // Employee's department name
    }
    
    getDetails() {
        return(`${this.name} works as a ${this.position} earning a Salary of: $${this.salary} annually`); // Method to get employee details 
    }
}
class Department{
    constructor(name, employees){
        this.name = name; // department name
        this.employees = [];  
    }
    addEmployee(employee){
        this.employees.push(employee); //Method to add employee to array
    }
    getDepartmentSalary(){
        return this.employees.reduce((total, employee) => total + employee.salary, 0); //Calculates the total department salary
    }}

    class Manager extends Employee{
        constructor(name, salary, position, department, bonus){
            super(name, salary, "Manager",department); // inherits name, position, salary and department from Employee Class 
            this.bonus = bonus; 
        }
    
        getDetails(){
            return(`${super.getDetails()}, Bonus: $${this.bonus}`); 
        
        }
    }
    
