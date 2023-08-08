import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

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
     const uniqueId = uuidv4();
     const formData = {
      ...form.value,
      id: uniqueId
    };
console.log(uniqueId)
    console.log(formData)
    this.recipeService.createRecipe(formData).subscribe(() => {
        this.router.navigate(['/catalog']);
      }
    );
  }
}
