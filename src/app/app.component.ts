import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myNewApp';
  constructor(private router: Router,public spinnerService: SpinnerService) { }
  ngOnInit(): void {
    this.router.navigate(['/login']);
  }
}
