
import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/model/meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
  
})
export class HomeContentComponent implements OnInit {

  constructor(private service: MealService) { }

  ngOnInit(): void {
  }

  meal!: Meal;

  getTheMeal() {

    this.service.fetch().subscribe(meal2 => {

this.meal=meal2.meals [0];
console.log(this.meal)
    })

  }

}
