
import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { book,stud } from '../user';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {

  constructor(public ser:AllService) { }

  all_books:book[]=[];
  all_student:stud[]=[];

  ngOnInit(): void {
    this.all_books=this.ser.getBooks();
    this.all_student=this.ser.getStudents();
  }

  Issue(books:book)
  {

    var temp="";
    let Usn = prompt('Type usn of the student here');

    this.all_student.forEach(Element=>{

      if(Element.usn==Usn)
      {
        Element.book=books.name;
        temp=Element.name;
      }
    })

    this.all_books.forEach(ele=>{

      if(ele.name==books.name)
      {
        ele.student=temp;
      }
    })
     console.log(temp);
    this.ser.setBooks(this.all_books);
    this.ser.setStudent(this.all_student);
    books.available=false;
  }

  CancelIssue(books:book)
  {

    var temp="";
    let Usn = prompt('Type usn of the student here');

    this.all_student.forEach(Element=>{

      if(Element.usn==Usn)
      {
        Element.book="null";

      }
    })

    this.all_books.forEach(ele=>{

      if(ele.name==books.name)
      {
        ele.student="null";
      }
    })

    this.ser.setBooks(this.all_books);
    this.ser.setStudent(this.all_student);
    books.available=true;
  }

  }


