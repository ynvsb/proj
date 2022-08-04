import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CustomValidators } from '../providers/CustomValidators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signupForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('',[Validators.required,Validators.minLength(3),
      Validators.maxLength(15)]),
      phonenumber: new FormControl('',[Validators.required,Validators.pattern(/^[6-9][0-9]{9}$/)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%_]).{8,18})/)
      ]),
      confirmpassword: new FormControl('', [Validators.required])
    },
    CustomValidators.mustMatch('password','confirmpassword')
  );
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      alert("Invalid");
    }

    if (this.signupForm.valid){
      alert("Valid");
      this.onSignup();
    }
  }
  onSignup(){
    this.router.navigate(['/login']);
  }

}
