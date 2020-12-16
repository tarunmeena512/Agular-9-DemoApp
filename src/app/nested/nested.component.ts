import { OnInit } from '@angular/core';
import { Component,ViewChild, Renderer2 } from "@angular/core";
import { ModulesList } from './menu'

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent{
  modulesList: Array<any>;

  constructor() {
    this.modulesList = ModulesList;
  }
}
