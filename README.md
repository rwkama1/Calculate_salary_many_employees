# Calculate the monthly salary of many employees of a company

This package contains a algorithm to calculate the monthly salary of many employees of a company


## Description

Knowing the name, number of days worked, absences for each employee,the total amount of salaries of all employees is requested, the number of employees who earn between USD 56 and USD 79,
the number of employees who earn less than USD 22 or more than USD 90, consider constant the daily payment to each employee and that the discount per day of absence is 100% of the daily payment.

## Usage

```Javascript

let  calculate_salary_many_employees=require("./calculate_salary_many_employees").calculate_salary_many_employees;
let Employee=require("./employee").Employee;
let arrayemployees=[];

arrayemployees.push(new Employee("Mauro",6,30,0));
arrayemployees.push(new Employee("Ghael",2.26,10,1));
arrayemployees.push(new Employee("John",9.25,20,2));

const show_employee_detail_salary=()=>
{
    arrayemployees.map(
        employee=>{
            console.log("Name: "+employee.name);
            console.log("-----------------------------------------");
            console.log("Daily Salary: USD "+employee.daily_salary);
            console.log("-----------------------------------------");
            console.log("Worked Days: "+employee.worked_days);
            console.log("-----------------------------------------");
            console.log("Absences: "+employee.absences);
            console.log("-----------------------------------------");
            console.log("Your monthly salary is: USD "+employee.calculate_monthly_salary());
            console.log("-----------------------------------------");
            console.log("Your discount for absences is: USD "+employee.absences_work_days());
            console.log("-----------------------------------------");
            console.log("                                    ");

        }
    )
}
const show_employees_total_salary=(arr)=>
{
    let cal=calculate_salary_many_employees(arr);
    console.log("The number of people who earn less than 22 is: "+cal.salary_less_than_22);
    console.log("                                          ");
    console.log("The number of people who earn more than 90 is: "+cal.salary_more_than_90);
    console.log("                                          ");
    console.log("The number of people who earn between 56 and 79 is: "+cal.salary_between_56_79);
    console.log("                                          ");
    console.log("The total salary of all workers is: USD "+cal.total_salary);
    
}
show_employee_detail_salary();
show_employees_total_salary(arrayemployees);

```