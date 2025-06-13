import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-registrations',
  templateUrl: './new-registrations.component.html',
  styleUrls: ['./new-registrations.component.scss']
})
export class NewRegistrationsComponent {
registration = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
  };

  constructor(private router: Router) {}

  onRegister() {
    console.log('New registration:', this.registration);
    alert('Registration submitted successfully!');
    
    this.registration = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
    };
    
    this.router.navigate(['/login']);
  }
}
