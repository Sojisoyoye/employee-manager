import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../entity/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  // Initializes variables
  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    this.employee = this.employeeService.getEmployee(id);
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee);
    this.router.navigate(["Employees"]);
  }

  cancelEmployee() {
    this.router.navigate(["Employees"]);
  }

}
