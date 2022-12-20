import { Component, OnInit } from '@angular/core';
import { AllService } from './all.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  constructor(public ser:AllService){}
  valid:boolean=false;
  ngOnInit(): void {
    this.ser.getAuth().subscribe((update:{Auth:boolean})=>{
      this.valid=update.Auth;
    })

  }
  }
