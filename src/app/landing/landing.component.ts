import { Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ApiCallerServiceService } from '../api-caller-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  config = new MatSnackBarConfig();
  displayedColumns: string[] = ['id', 'first_name','last_name','email','action'];
  dataSource :any = new MatTableDataSource();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
   private matDialog:MatDialog,
   private _snackBar: MatSnackBar,
   private apicallerService:ApiCallerServiceService) { }
  ngOnInit() {
    this.apicallerService.get().subscribe((response : any)=>{
    this.dataSource.data = response;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
    this.apicallerService.sub$.subscribe(data=>{
      if(data===1){}else{
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;}
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(action,obj) {
  if(action==='Delete'){

   // this.delete(obj);
   const dialogRef = this.matDialog.open(DialogOverviewExampleDialogComponent, {
    width: '350px',
    height: '250px',
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
      height: '400px',
      width: '250px',
      data: {action:action,"title":"Edit Employee Details","content":obj}
    });
  }
  if(action==='Add'){
    const dialogRef = this.matDialog.open(DialogOverviewExampleDialogComponent, {
      height: '400px',
      width: '250px',
      data: {action:action,"title":"Add Employee Details","content":obj}
    });
    //this.add(obj);
  }
  }
  delete(obj) {
    this.apicallerService.delete(obj).subscribe((data : any)=>{
      this.apicallerService.get().subscribe((data : any)=>{
        this.config.duration = 5000;
          this.config.panelClass = ['green-snackbar']
                this._snackBar.open('Success!', '', this.config) 
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






