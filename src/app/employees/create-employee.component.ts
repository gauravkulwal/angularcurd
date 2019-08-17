import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.sass']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
saveEmployee(empForm: NgForm): void{
  alert(empForm.value);
}
}
