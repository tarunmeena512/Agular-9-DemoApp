import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef} from "@angular/material/dialog";
import {ApiCallerServiceService} from '../api-caller-service.service';
import {DialogOverviewExampleDialogComponent} from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  profileForm = new FormGroup({
    id: new FormControl(''),
    first_name: new FormControl(''),
    last_name:new FormControl(''),
    email:new FormControl('')
  });

  constructor(private apicallerService:ApiCallerServiceService,public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>) { }

  ngOnInit(): void {
  }
  onSubmit() {
   
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.apicallerService.post(this.profileForm.value).subscribe((data:any)=>{
    console.log(data);
    
    this.apicallerService.get().subscribe((data:any)=>{
     this.apicallerService.sendData(data);
    })
    });
  }

}
