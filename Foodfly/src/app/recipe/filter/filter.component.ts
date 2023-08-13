import { Component } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  recipes: Recipe[] = []; 
  filteredRecipes: Recipe[] = [];
  
  constructor(private recipeService: RecipeService,  private activatedRoute: ActivatedRoute) {}
  desiredType:any = this.activatedRoute.snapshot.params['type']
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.filteredRecipes = this.getTypeRecipes(this.desiredType);
    });
  }

  getTypeRecipes(type: string): any[] {
    return this.recipes.filter((recipe) => recipe.type === type);
  }
}
