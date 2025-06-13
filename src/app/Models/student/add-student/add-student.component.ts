import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../Service/student.service';
import { Student } from '../Model/Student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  student: Student = {
    id: 0,
    name: '',
    email: '',
    phone: ''
  };
  constructor(private router: Router, private studentService: StudentService){

  }
  onsubmit(): void{
      this.studentService.addStudent(this.student);
      this.router.navigate(['/private/student/show-students']);
      console.log("Student data", this.student)
  }
}
