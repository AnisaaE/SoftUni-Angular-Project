import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/types/recipe';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  recipe:Recipe ={
    _ownerId: "",
    _id: "",
    title: "",
    type: "",
    image: "",
    timing: "",
    portions: "",
    preparation: "",
    ingredients: "",
  }
  constructor(
     private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ){}
    id = this.activatedRoute.snapshot.params['recipeId'];
  ngOnInit(): void {
    this.fetchRecipe();
  }

  fetchRecipe(): void {
      this.recipeService.getRecipe(this.id).subscribe({
        next:(item) => {
         this.recipe= item;
        }
      })
    };

    editSubmitHandler(form: NgForm): void {
      if (form.invalid) {
        return;
      }
      console.log(form.value)
      const {title, type, image,
      timing,
      portions,
      preparation,
      ingredients} = form.value

      this.recipe.title = title;
      this.recipe.type= type;
      this.recipe.timing= timing;
      this.recipe.portions= portions;
      this.recipe.preparation= preparation;
      this.recipe.ingredients= ingredients;

      this.recipeService.editRecipe(this.id, this.recipe).subscribe(() => {
          this.router.navigate([`/catalog/${this.id}`]);
        }
      );
    }
}