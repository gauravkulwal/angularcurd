import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';


@Component({
 /* selector: 'app-list-employees',*/
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.sass']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@gauravkulwal.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/003.jpg'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/002.jpg'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/001.jpg'
    },
  ];onstructor() { }

  ngOnInit() {
  }

}
