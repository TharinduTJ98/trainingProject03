import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent {
  student = {
    name: 'ABC',
    email: 'abc@gmail.com',
    phone: '077-8574985'
  };
  constructor(private router: Router){

  }

  onUpdate() {
    this.router.navigate(['/private/student/show-students']);
    console.log('Student updated:', this.student);
  }
}
