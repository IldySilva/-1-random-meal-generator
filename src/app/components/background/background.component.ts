import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
appComponent1=AppComponent;


  constructor(public appComponent: AppComponent) {  

  }

  ngOnInit(): void {

  }

}
