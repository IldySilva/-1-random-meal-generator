import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'randommealgenerator';
  static currentImageUrl="bg.jpg"
  
  private _bg=new BehaviorSubject<string>("bg.jpg")
  
  get headerData():string{
    return this._bg.value;
  }
  set headerData(headerData:string){
this._bg.next(headerData);
  }
}
