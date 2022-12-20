import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../all.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router,public ser:AllService) { }

   
  valid:boolean=false;
  ngOnInit(): void {
    this.ser.getAuth().subscribe((update:{Auth:boolean})=>{
      this.valid=update.Auth;
    })

  }
  SubmitForm(data:any)
  {
    if(data.email=='admin@gmail.com' && data.pass=='1234')
    {
      this.ser.setAuth(true);
    }
    else{
      this.ser.setAuth(false);

    }
  }

}
