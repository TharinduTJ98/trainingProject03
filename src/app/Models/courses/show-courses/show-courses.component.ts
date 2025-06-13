import { Component } from '@angular/core';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.scss']
})
export class ShowCoursesComponent {
  courses = [
    { name: 'Angular Development', code: 'ABC', credits: 3 },
    { name: 'JavaScript Fundamentals', code: 'DCE', credits: 4 },
    { name: 'Database Design', code: 'EFG', credits: 3 }
  ];
}
