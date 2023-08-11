import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private recipeService: RecipeService, private router: Router) {}
  
  newRecipeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    
     const formData = {
      ...form.value, comments:[], state:'normal'
    };
    console.log(formData)
    this.recipeService.createRecipe(formData).subscribe(() => {
        this.router.navigate(['/catalog']);
      }
    );
  }
}
