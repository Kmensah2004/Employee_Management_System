// Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;          // Employee name
        this.salary = salary;      // Employee salary
        this.position = position;  // Employee position 
        this.department = department; // Employee's department name
    }
    getDetails() {
        return(`${this.name} works as a ${this.position} earning Salary: $${this.salary} annually`); // Method to get employee details 
    }
}

// Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee{
    constructor(name, salary, position, department, bonus){
        super(name, salary, "Manager",department); // inherits name, position, salary and department from Employee Class 
        this.bonus = bonus; 
    }

    getDetails(){
        return(`${super.getDetails()}, Bonus: $${this.bonus}`); 
    
    }
}

class Department{
    constructor(name, employees){
        this.name = name; // department name
        this.employees = [];  //empty employee array
    }
    addEmployee(employee){
        this.employees.push(employee); //Method to add employee to array
    }

    getDepartmentSalary(){
        return this.employees.reduce((total, employee) => total + employee.salary, 0); //Calculates the total department salary
    }
    calculateTotalSalaryWithBonus(){ //method to calculate bonus
        return this.employees.reduce((total, employee) => {
            if (employee in Manager) { // includes managers
                return total + employee.salary + employee.bonus; // calculate total salary including bonus
            }
            return total + employee.salary; 
        }, 0 );
    }
}


// Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Create employees and managers
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Manager", "Marketing", 25000);

// Add employees to their respective departments
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

// Print employee details
console.log(alice.getDetails());
console.log(bob.getDetails()); 
console.log(charlie.getDetails()); 
console.log(diana.getDetails()); 


// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);