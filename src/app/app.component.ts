import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myNewApp';
  constructor(public spinnerService: SpinnerService
 ) { }

}
