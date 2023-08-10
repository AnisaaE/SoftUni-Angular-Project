import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  
  isOpen:boolean = false
  isOwner?:boolean;
  recipe:Recipe | null = null
  isAuth:boolean=this.userService.isLogged
  constructor( 
    private recipeServer: RecipeService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
    ){
    }

  ngOnInit(): void {
        this.isOpen= this.recipeServer.isOpen
    this.fetchRecipe();  
  }

  fetchRecipe(): void {
    const id = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeServer.getRecipe(id).subscribe({
      next:(item) => {
      this.recipe= item;
      this.isOwner=  this.recipe._ownerId === this.userService.user?._id;
       console.log(this.recipe)}
    });
  }
 confirmationDelete():void{
   this.recipeServer.isOpen=true
 }
}