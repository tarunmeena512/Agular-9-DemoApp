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

  displayedColumns: string[] = ['id', 'userId', 'title','action'];
  dataSource :any = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private apicallerService:ApiCallerServiceService) { }
  ngOnInit() {
    this.apicallerService.get().subscribe(res=>{
    this.dataSource.data = res;
    this.dataSource.paginator = this.paginator;
    })
    
  }
  openDialog(action,obj) {
  if(action==='Delete'){
    this.deletePost(obj);
  }
  }
  deletePost(obj) {
    this.apicallerService.delete(obj).subscribe(res => {
      console.log(res);
    })
  }


}





