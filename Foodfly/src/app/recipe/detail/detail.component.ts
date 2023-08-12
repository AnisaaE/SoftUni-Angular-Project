import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { addComment, removeComment } from './comment.actions';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  
  showChild:boolean = false
  isOwner?:boolean;
  recipe:Recipe | null = null
  isAuth:boolean=this.userService.isLogged
  username: any;
  userId:any 
  constructor( 
    private recipeServer: RecipeService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private store: Store<{ comments: Comment[] }>,
    ){
    }
 id:any = this.activatedRoute.snapshot.params['recipeId']
  ngOnInit(): void {
       
    this.fetchRecipe();  
  }

  fetchRecipe(): void {
  
    this.recipeServer.getRecipe(this.id).subscribe({
      next:(item) => {
      this.recipe= item;
      this.userId = this.userService.user?._id;
      this.isOwner=  this.recipe._ownerId === this.userId;
      this.username = this.userService.user?.username;
    }
    });
  }
 confirmationDelete():void{
  this.showChild = !this.showChild;
 }

 removeComment(commentId: string): void {
  this.store.dispatch(removeComment({ commentId }));
}

getFormattedTime(timestamp: any): string {
  const currentDate = new Date();
  const commentDate = new Date(Number(timestamp));
  const elapsedMilliseconds = currentDate.getTime() - commentDate.getTime();

  if (elapsedMilliseconds < 60000) { // Less than 1 minute
    return 'Just now';
  } else if (elapsedMilliseconds < 3600000) { // Less than 1 hour
    return Math.floor(elapsedMilliseconds / 60000) + ' mins ago';
  } else if (elapsedMilliseconds < 86400000) { // Less than 1 day
    return Math.floor(elapsedMilliseconds / 3600000) + ' hrs ago';
  } else {
    return Math.floor(elapsedMilliseconds / 86400000) + ' days ago';
  }
};
} 