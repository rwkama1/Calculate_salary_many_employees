class Employee
{
    constructor(pname, pdaily_salary,pworked_days,pabsences) {
        this.name = pname;
        this.daily_salary = pdaily_salary;
        this.worked_days=pworked_days;
        this.absences=pabsences;
      }
      calculate_monthly_salary() {
        return (this.worked_days-this.absences)*this.daily_salary;
      }
      absences_work_days()
      {
        return this.absences * this.daily_salary;
      }
}
module.exports={Employee}