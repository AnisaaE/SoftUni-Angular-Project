import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { CommentService } from '../comment.service';

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

  userId:any 
  constructor( 
    private recipeServer: RecipeService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private commentService: CommentService
    ){
    }
 id:any = this.activatedRoute.snapshot.params['recipeId']
  ngOnInit(): void {
        this.isOpen= this.recipeServer.isOpen
    this.fetchRecipe();  
  }

  fetchRecipe(): void {
  
    this.recipeServer.getRecipe(this.id).subscribe({
      next:(item) => {
      this.recipe= item;
      this.userId = this.userService.user?._id
      this.isOwner=  this.recipe._ownerId === this.userId
    }
    });
  }
 confirmationDelete():void{
   this.recipeServer.isOpen=true
 }

 onDeleteComment(id:string){
  this.commentService.deleteComment(id);
 }
}