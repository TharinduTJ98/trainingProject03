import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicBaseComponent } from './Components/public-base/public-base.component';
import { PrivateBaseComponent } from './Components/private-base/private-base.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: PublicBaseComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'private',
    component: PrivateBaseComponent,
    children: [
      {
        path: 'student',
        loadChildren: () => import('././Models/student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('././Models/courses/courses.module').then(m => m.CoursesModule)
      },
      {
        path: 'my-testing',
        loadChildren: () => import('././Models/my-testing/my-testing.module').then(m => m.MyTestingModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
