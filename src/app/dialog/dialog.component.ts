import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  
  submitted = false;
  myform: FormGroup;
  titleAlert: string = 'This field is required';

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.myform = this.fb.group({
      email: ['', [Validators.required,Validators.pattern(emailregex)],this.checkInUseEmail]
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.myform.controls; }
  onSubmit(event) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myform.invalid) {
      return;
    }
  }
  getErrorEmail() {
    return this.myform.get('email').hasError('required') ? 'Field is required' :
      this.myform.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
      this.myform.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }
  
  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
    })
  }


}
