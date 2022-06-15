
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Meal } from 'src/app/model/meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
  
})
export class HomeContentComponent implements OnInit {

  constructor(private service: MealService,private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  meal!: Meal;

  getTheMeal() {

    this.service.fetch().subscribe(meal2 => {

this.meal=meal2.meals [0];
console.log(this.meal)
this.appComponent.headerData=this.meal.strMealThumb;
    })
console.log(this.appComponent.headerData)
  }

}
