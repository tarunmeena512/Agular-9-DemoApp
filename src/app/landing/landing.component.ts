import { Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ApiCallerServiceService } from '../api-caller-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  displayedColumns: string[] = ['id', 'first_name','last_name','email','action'];
  dataSource :any = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
   private matDialog:MatDialog,
   private apicallerService:ApiCallerServiceService) { }
  ngOnInit() {
    this.apicallerService.get().subscribe((response : any)=>{
    this.dataSource.data = response;
    this.dataSource.paginator = this.paginator;
    })
    this.apicallerService.sub$.subscribe(data=>{
      if(data===1){}else{
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;}
    })
  }
  openDialog(action,obj) {
  if(action==='Delete'){

   // this.delete(obj);
   const dialogRef = this.matDialog.open(DialogOverviewExampleDialogComponent, {
    width: '250px',
    data: {action:action,"title":"Do you want to delete ?","content":obj}
  });

  dialogRef.afterClosed().subscribe(result => {
  if(result.action==="doDelete"){
   this.delete(result);
  }

  });

  }
  if(action==='Edit'){
    const dialogRef = this.matDialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {action:action,"title":"Edit Employee Details","content":obj}
    });
  }
  if(action==='Add'){
    const dialogRef = this.matDialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {action:action,"title":"Add Employee Details","content":obj}
    });
    //this.add(obj);
  }
  }
  delete(obj) {
    this.apicallerService.delete(obj).subscribe((data : any)=>{
      this.apicallerService.get().subscribe((data : any)=>{
      
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
     
      })
   
     
      })
  }
  
  add(obj) {
    alert('In Progress')
  }
  trackById(index:number, el:any): number {
    return el.id;
  }

  edit(obj) {
    alert('In Progress')
  }

 

}






