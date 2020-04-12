import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '@shared/services/auth.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  errors = [];
  loginFormGroup: FormGroup;
  formSubmitted:boolean=false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) { 
   
  
  }

  ngOnInit() {
    this.createForm();
  }

  get form(){
    return this.loginFormGroup.controls;
  }

  createForm(){
    this.loginFormGroup = new FormGroup({
      email: new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email]),
      password: new FormControl('cityslicka', [Validators.required]),
    });
  }

  login(){
    this.formSubmitted = true;
    if(this.loginFormGroup.valid)
    {
      this.errors = [];
      this.auth.login(
        this.form.email.value,this.form.password.value
      ).toPromise().then(
        res =>{
        d=>  
         console.log('user:', d);
        this.router.navigate(['admin/home'])})
         .catch(
         err=> { console.log('erro:',err), this.errors.push({text:err.error.error})})    
      }
    }
}
