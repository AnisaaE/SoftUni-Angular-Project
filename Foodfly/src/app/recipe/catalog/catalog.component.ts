import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { TypesOfRecipiesComponent } from './types-of-recipies/types-of-recipies.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  
  recipes:Recipe[]=[]

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next:(recipes)=>{
        this.recipes=recipes
      }
    })
  }
}
