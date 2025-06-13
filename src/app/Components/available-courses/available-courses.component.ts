import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-courses',
  templateUrl: './available-courses.component.html',
  styleUrls: ['./available-courses.component.scss']
})
export class AvailableCoursesComponent {
  courses = [
    { id: 1, name: 'Angular Basics', instructor: 'ABC DCE', duration: '4 weeks' },
    { id: 2, name: 'React Fundamentals', instructor: 'DEG HYT', duration: '3 weeks' },
    { id: 3, name: 'Python for Beginners', instructor: 'FGT POY', duration: '6 weeks' },
    { id: 1, name: 'Angular Basics', instructor: 'ABC DCE', duration: '4 weeks' },
    { id: 2, name: 'React Fundamentals', instructor: 'DEG HYT', duration: '3 weeks' },
    { id: 3, name: 'Python for Beginners', instructor: 'FGT POY', duration: '6 weeks' }
  ];

}
