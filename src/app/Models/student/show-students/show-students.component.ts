import { Component } from '@angular/core';
interface Student {
  id: number;
  name: string;
  email: string;
  phone?: string;
}
@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.scss']
})
export class ShowStudentsComponent {
  students: Student[] = [
    {id:1, name:'ABC', email:'abc@gmail.com', phone:'077-6284276'},
    {id:2, name:'DEF', email:'def@gmail.com', phone:'077-4579852'},
    {id:3, name:'GHI', email:'ghi@gmail.com', phone:'077-4793584'},
    {id:4, name:'JKL', email:'jkl@gmail.com', phone:'077-1498752'},
  ];
}
