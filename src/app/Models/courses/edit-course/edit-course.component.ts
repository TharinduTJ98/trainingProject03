import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent {
  course = {
    name: 'Angular Development',
    code: 'ABC',
    credits: 3
  };

  constructor(private router: Router){

  }

  onUpdate() {
    this.router.navigate(['/private/course/show-course']);
    console.log('Course updated:', this.course);
  }
}
