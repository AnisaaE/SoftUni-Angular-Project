import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from '../../comment.service';
import { UserService } from 'src/app/user/user.service';
import { Recipe } from 'src/app/types/recipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() recipeId: any
   username: string =''
   id:any = this.activatedRoute.snapshot.params['recipeId']

   constructor(private commentService: CommentService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,){}

  handleSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    
     const formData = {
      ...form.value, username:this.userService.user?.username
    };
   
    this.commentService.addComment(this.id, formData).subscribe(() => {})
     console.log(formData)
  }
}
