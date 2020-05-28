import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { FormGroup, FormControl } from '@angular/forms';
import {ApiCallerServiceService} from '../api-caller-service.service';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.scss']
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  action:any;
  title:any;
  content:any;
  isDelete:boolean=false;
  isAdd:boolean=false;

  example = { id: "",
             first_name: "",
             last_name:"",
             email:""
            };

  profileForm = new FormGroup({
    id: new FormControl(''),
    first_name: new FormControl(''),
    last_name:new FormControl(''),
    email:new FormControl('')
  });

  constructor(private apicallerService:ApiCallerServiceService,@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>) {
  this.action = data.action;
  this.title = data.title;
  this.content = data.content;
  this.isDelete=data.delete;
  this.isAdd = data.add;
this.example.id = this.content.id;
this.example.first_name = this.content.first_name;
this.example.last_name = this.content.last_name;
this.example.email = this.content.email;
  //this.profileForm.controls.email.value=data.content.email;

   }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close("Thanks for using me!");
  }
  delete() {
    this.content.action = 'doDelete';
    this.dialogRef.close(this.content);
  }
  Save(){
    if(this.action==='Edit'){
      this.dialogRef.close("Thanks for using me!");
      this.apicallerService.edit(this.profileForm.value).subscribe((data:any)=>{
        this.apicallerService.get().subscribe((data:any)=>{
          //this.dialogRef.close("Thanks for using me!");
          this.apicallerService.sendData(data);
         })
      })
    }else{
 // TODO: Use EventEmitter with form value

 this.dialogRef.close("Thanks for using me!");

 this.apicallerService.post(this.profileForm.value).subscribe((data:any)=>{
 console.log(data);
 
 this.apicallerService.get().subscribe((data:any)=>{

 
  this.apicallerService.sendData(data);
 })
 });
  }
}
}
