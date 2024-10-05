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

    class Manager extends Employee{
        constructor(name, salary, position, department, bonus){
            super(name, salary, "Manager",department); // inherits name, position, salary and department from Employee Class 
            this.bonus = bonus;
        }
        getDetails(){
            return(`${super.getDetails()}, Bonus: $${this.bonus}`); // Overriding the getDeatils method to include bonus
        
        }
    }
    // Task 4 begins here
    calculateTotalSalaryWithBonus();{
        return this.employees.reduce((total, employee) => {
            if ('bonus' in Manager) { // checks if there is a bonus
                return total + employee.salary + employee.bonus; // calculate total salary including bonus
            }
            return total + employee.salary; 
        }, 0 );
    }
