import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { stud } from '../user';

@Component({
  selector: 'app-display-stud',
  templateUrl: './display-stud.component.html',
  styleUrls: ['./display-stud.component.css']
})
export class DisplayStudComponent implements OnInit {

  constructor(public ser:AllService) { }

  All_stud:stud[]=[];



  ngOnInit(): void {
    this.All_stud=this.ser.getStudents();
  }

}
