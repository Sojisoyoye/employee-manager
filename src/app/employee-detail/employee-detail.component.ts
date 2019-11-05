import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../entity/employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  // Input variable to display the properties of an employee
  @Input() employee: Employee;

  //Output variable used to tell the parent component to refresh the employee list after successful delete 
  @Output() refreshEmployeeList: EventEmitter<boolean> = new EventEmitter<boolean>();

  //service injected in constructor
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  editEmployee() {
    this.router.navigate(["EditEmployee/"+ this.employee.id])
  }

  deleteEmployee(employeeToBeDeleted: Employee) {
    let result = confirm("Are you sure, you want to delete this Employee?");
    if (result) {
      this.employeeService.deleteEmployee(this.employee.id);
      this.refreshEmployeeList.emit(true);
      this.router.navigate(["Employees"]);
    }
  }
}
