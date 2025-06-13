import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';
import { Student } from '../Model/Student';
@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.scss']
})
export class ShowStudentsComponent implements OnInit{
  students: Student[] = [];
  constructor(private studentSerive: StudentService){

  }
  ngOnInit(): void {
    this.studentSerive.students$.subscribe(
      data => {
        this.students = data;
      }
    )
  }
}
