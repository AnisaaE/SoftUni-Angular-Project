import { Component } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
isOpen:boolean = this.recipeService.isOpen
   constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
   ){}

   id = this.activatedRoute.snapshot.params['recipeId'];
   
   handleDelete(){
    this.recipeService.isOpen = false;
    this.recipeService.deleteRecipe(this.id).subscribe(() => {
    this.router.navigate(['/catalog']);
    });
   }
   handleCancel(){
    this.recipeService.isOpen = false;
   }
  
}
