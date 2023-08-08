import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
 
  recipe:Recipe | null = null

  constructor( 
    private recipeServer: RecipeService,
    private activatedRoute: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.fetchRecipe();
  }

  fetchRecipe(): void {
    const id = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeServer.getRecipe(id).subscribe((item) => {
      this.recipe= item;
       console.log(this.recipe)
    });
   
}
}