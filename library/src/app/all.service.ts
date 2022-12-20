import { Injectable } from '@angular/core';

import {stud,book} from './user';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor() { }

  public verify =new Subject<{Auth:boolean}>;

  all_student:stud[]=[];
  all_books:book[]=[];

  addStudent(student:stud){

    this.all_student.push(student);
  }

  setStudent(all_student1:stud[])
  {
    this.all_student=all_student1;
  }

  setBooks(all_books:book[])
  {
    this.all_books=all_books;
  }

  addBooks(books:book)
  {
    this.all_books.push(books);
  }

  getBooks()
  {
    return this.all_books;
  }

  getStudents()
  {
    return this.all_student;
  }

  setAuth(val:boolean)
  {
    this.verify.next({Auth:val});
  }

  getAuth()
  {
    return this.verify.asObservable();
  }

}
