import { Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ApiCallerServiceService } from '../api-caller-service.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary','employee_age','action'];
  dataSource :any = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private apicallerService:ApiCallerServiceService) { }
  ngOnInit() {
    this.apicallerService.get().subscribe((response : any)=>{
    this.dataSource.data = response.data;
    this.dataSource.paginator = this.paginator;
    })
  }
  openDialog(action,obj) {
  if(action==='Delete'){
    this.delete(obj);
  }
  if(action==='Edit'){
    this.edit(obj);
  }
  if(action==='Add'){
    this.add(obj);
  }
  }
  delete(obj) {
    alert('In Progress')
  }
  add(obj) {
   alert('In Progress')
  }
  edit(obj) {
    alert('In Progress')
  }


}






