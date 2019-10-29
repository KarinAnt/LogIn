import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  errorName = "";
  errorPassword = "";
  noErrorPassword = true;
  noErrorName = true;
  constructor() {
   }

  ngOnInit() {
    this.myform = new FormGroup({
        userName: new FormControl(),
        password: new FormControl(),
    });
  }
  logIn(){
    if(this.myform.value.password == null || this.myform.value.password == ''){
      this.errorPassword='Password is empty!!!!'
      this.noErrorPassword = false;
    }else  if(this.myform.value.password.length < 6){
      this.errorPassword='Min 6 simvols!!!!'
      this.noErrorPassword = false;
    }else if(this.myform.value.password.length > 8){
      this.errorPassword='Max 8 simvols!!!!'
      this.noErrorPassword = false;
    }else{
      this.noErrorPassword = true;
    }
    if(this.myform.value.userName === null || this.myform.value.userName == ''){
      this.errorName='User Name is empty!!!!'
      this.noErrorName = false;
    }else{
      this.noErrorName = true;
    }
    if(this.noErrorName && this.noErrorPassword){
      console.log(this.myform.value);
    }
  }
  errorsPassword(){
    this.errorPassword='';
  }
  errorsName(){
    this.errorName='';
  }
}
