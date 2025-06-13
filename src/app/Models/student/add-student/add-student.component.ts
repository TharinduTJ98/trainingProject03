import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  student = {
    name: '',
    email: '',
    phone: ''
  };
  constructor(private router: Router){

  }
  onsubmit(): void{
      this.router.navigate(['/private/student/show-students']);
      console.log("Student data", this.student)
  }
}
