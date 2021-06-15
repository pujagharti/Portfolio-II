import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  //   form.reset();

  public showPassword = false;
  redirectUrl: string;
  public SignupComponent: FormGroup;

  constructor() {}

  ngOnInit(): void {
  }

}
