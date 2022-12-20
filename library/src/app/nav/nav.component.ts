import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public ser:AllService){}
  valid:boolean=false;
  ngOnInit(): void {
    this.ser.getAuth().subscribe((update:{Auth:boolean})=>{
      this.valid=update.Auth;
    })

  }


  }




