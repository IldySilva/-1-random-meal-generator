import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal, Meals } from '../model/meal';


@Injectable({
  providedIn: 'root'
})
export class MealService {



  baseUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
  constructor(private http: HttpClient) { }
  fetch(): Observable<Meals> {

    return this.http.get<Meals>(this.baseUrl);

  }

}
