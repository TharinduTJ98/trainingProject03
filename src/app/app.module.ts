import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicBaseComponent } from './Components/public-base/public-base.component';
import { PrivateBaseComponent } from './Components/private-base/private-base.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NewRegistrationsComponent } from './Components/new-registrations/new-registrations.component';
import { AvailableCoursesComponent } from './Components/available-courses/available-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicBaseComponent,
    PrivateBaseComponent,
    LoginComponent,
    NewRegistrationsComponent,
    AvailableCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
