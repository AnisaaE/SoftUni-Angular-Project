import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngrx/store';
import { addComment, removeComment } from '../comment.actions';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() recipeId: any
  @Input() recipe: any
   newCommentText: string = '';
   username: string =''
   id:any = this.activatedRoute.snapshot.params['recipeId']

   constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private store: Store<{ comments: Comment[] }>,
    ){}

    handleCommentChange(comment: string): void {
      this.newCommentText = comment;
    }
  handleSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    
     const {comment} =  form.value
   
    const newComment: any = {
      _id: uuidv4() ,
      _ownerId:this.userService.user?._id ,
      recipeId: this.recipe?._id || '',
      comment: comment,
      _createdOn: Date.now(),
      username: this.userService.user?.username
    };

    this.recipe.comments.push(newComment); 
    this.recipeService.editRecipe(this.recipe._id, this.recipe).subscribe({
      next:() => {
      this.newCommentText = ''; }
    });
  }
onChange(){
  this.newCommentText = ''; 
}
  addComment(newComment: any): void {
     this.store.dispatch(addComment({ comment: newComment }));
  }
  
}
