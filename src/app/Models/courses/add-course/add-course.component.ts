import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  course = {
    name: '',
    code: '',
    credits: 0
  };
  constructor(private router: Router){
    
  }
  onSubmit() {
    this.router.navigate(['/private/courses/show-courses']);
    console.log('Course updated:', this.course);
  }
}
