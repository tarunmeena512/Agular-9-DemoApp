import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { slideInOut } from '../animation';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[
    slideInOut
  ]
})
export class LoginComponent implements OnInit {
  config = new MatSnackBarConfig();
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router, private route: ActivatedRoute,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.warn(this.loginForm.value);
    if(this.loginForm.value.password!=='' && this.loginForm.value.password.userName!=='' ){
      this.router.navigate(['/landing']);
      this.config.duration = 3000;
      this.config.panelClass = ['green-snackbar']
            this._snackBar.open('Login success', '', this.config) 
    }else{
      this.config.duration = 5000;
      this.config.panelClass = ['abc']
            this._snackBar.open('Username and password required', '', this.config) 
    }
    
  }
}
