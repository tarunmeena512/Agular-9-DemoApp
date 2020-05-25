import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>) {
  this.action = data.action;
  this.title = data.title;
  this.content = data.content;
  this.isDelete=data.delete;
  this.isAdd = data.add;

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
}
