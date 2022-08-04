import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%_]).{8,18})/)
      ])
    }
  );
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    if (this.loginForm.valid){
      alert("Form submitted");
    }
  }

}