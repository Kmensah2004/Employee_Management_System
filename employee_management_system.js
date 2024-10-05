//  Create an Employee Class
class Employee {
    constructor(name, salary, position, department) { // making a class of employee properties
        this.name = name;  
        this.position = position;   
        this.salary = salary; 
        this.department = department; 
    }

     getDetails() {
        return(`${this.name} works as a ${this.position} earning a Salary of: $${this.salary} annually`); // Method to get employee details as an organized string
    }
}

class Department{ //creates Department class
    constructor(name, employees){
        this.name = name; // name of department
        this.employees = [];  //empty employee array
    }

    addEmployee(employee){
        this.employees.push(employee); //Method to add employee to array
    }
    getDepartmentSalary(){
        return this.employees.reduce((total, employee) => total + employee.salary, 0); //Calculates the total department salary
    }}