import { Component, OnInit } from '@angular/core';
import {stud} from '../user';
import { AllService } from '../all.service';

@Component({
  selector: 'app-add-stud',
  templateUrl: './add-stud.component.html',
  styleUrls: ['./add-stud.component.css']
})
export class AddStudComponent implements OnInit {

  constructor(public ser:AllService) { }

  ngOnInit(): void {
  }

  SubmitForm(data:any)
  {
    let obj:stud={
      name:data.username,
      usn:data.usn,
      email:data.email,
      dep:data.dep,
      gender:data.gender,
      book:"null"
  };

  this.ser.addStudent(obj);

  }

}
