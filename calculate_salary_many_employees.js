const  calculate_salary_many_employees=(employees)=>
{
 let total_salary=0;
 let monthly_salary,salary_less_than_22,salary_more_than_90,salary_between_56_79;
 monthly_salary=0;
 salary_less_than_22=0;
 salary_more_than_90=0;
 salary_between_56_79=0;

 employees.map(
    employee=> {
        monthly_salary=employee.calculate_monthly_salary();
        if(monthly_salary<22)
        {
            salary_less_than_22=salary_less_than_22+1;
        }
        if(monthly_salary>90)
        {
            salary_more_than_90=salary_more_than_90+1;
        }
        if(monthly_salary>=56&&monthly_salary<=79)
        {
            salary_between_56_79=salary_between_56_79+1;
        }
        total_salary=total_salary+monthly_salary;
     }
     
 )
 return {total_salary,salary_between_56_79,salary_less_than_22,salary_more_than_90}
}


module.exports={calculate_salary_many_employees};
