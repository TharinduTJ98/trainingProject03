import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../Model/Student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsList: Student[] = [
    {id: 1, name: 'ABC', email: 'abc@gmail.com', phone: '077-6284276'},
    {id: 2, name: 'DEF', email: 'def@gmail.com', phone: '077-4579852'},
    {id: 3, name: 'GHI', email: 'ghi@gmail.com', phone: '077-4793584'},
    {id: 4, name: 'JKL', email: 'jkl@gmail.com', phone: '077-1498752'},
  ];

  private studentsSubject = new BehaviorSubject<Student[]>(this.studentsList);
  students$ = this.studentsSubject.asObservable();
  
  constructor() { }

  getStudents(): Student[] {
    return [...this.studentsList]; 
  }

  addStudent(student: Student) {
    student.id = this.studentsList.length + 1;
    this.studentsList.push(student);
    this.studentsSubject.next(this.studentsList);
  }
}
