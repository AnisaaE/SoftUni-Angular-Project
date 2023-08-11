import { Component } from '@angular/core';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { UserService } from '../user.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userRecipes: any
  allRecipes: Recipe[]=[]
  userId:any
  email:any
  username:any
constructor(private recipeService: RecipeService,
  private userService:UserService
  ){

  }
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next:(recipes)=>{
        this.allRecipes=recipes
         this.email = this.userService.user?.email
         this.userId = this.userService.user?._id
        this.username = this.userService.user?.username
         this.userRecipes = this.getRecipesOfUser()
      }
    }
    )
}  

getRecipesOfUser() {
  const userFRecipes = this.allRecipes.filter((x) => {
    return x._ownerId === this.userId;
  });
  return userFRecipes;
}

}