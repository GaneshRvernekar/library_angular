import { Component, OnInit } from '@angular/core';
import {book} from '../user';
import { AllService } from '../all.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(public ser:AllService) { }

  ngOnInit(): void {
  }

  SubmitForm(data:any)
  {
    let Obj:book={
      name:data.name,
      description:data.description,
      available:true,
      student:"null"
    }

    this.ser.addBooks(Obj);
  }

}
