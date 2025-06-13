import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { ShowCoursesComponent } from './show-courses/show-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'show-courses',
    pathMatch: 'full'
  },
  {
    path: 'add-course',
    component: AddCourseComponent
  },
  {
    path: 'show-courses',
    component: ShowCoursesComponent
  },
  {
    path: 'edit-course',
    component: EditCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
