import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../types/recipe';
import { environment } from 'src/enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes:any
  private appUrl = 'http://localhost:3030/data/recipes';
  constructor(private http: HttpClient) { }
 
  getRecipes() {
    return this.http.get<Recipe[]>(`${this.appUrl}`);
  }
  
  getRecipe(id: string) {
    return this.http.get<Recipe>(`${this.appUrl}/${id}`);
  }

  createRecipe(data:any) {
    return this.http.post<Recipe>(`${this.appUrl}`, data);
  }
  editRecipe(id:string, data:any){
    return this.http.put<Recipe>(`${this.appUrl}/${id}`, data);
  }

  deleteRecipe = (recipeId:string) => this.http.delete(`${this.appUrl}/${recipeId}`);

  isOpen: boolean= false
}
// const getTypeRecipes = (type:string) => {
//   return recipes.filter((recipe) => recipe.type === type);
// };

