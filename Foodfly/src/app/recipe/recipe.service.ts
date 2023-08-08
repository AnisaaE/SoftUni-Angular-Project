import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../types/recipe';
import { environment } from 'src/enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor(private http: HttpClient) { }
 
  getRecipes() {
    const { appUrl } = environment;
    return this.http.get<Recipe[]>(`${appUrl}/data/recipes`);
  }
  
  getRecipe(id: string) {
    const { appUrl } = environment;
    return this.http.get<Recipe>(`${appUrl}/data/recipes/${id}`);
  }
}
