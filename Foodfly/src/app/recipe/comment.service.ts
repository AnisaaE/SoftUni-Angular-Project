import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../types/recipe';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
   baseUrl = 'http://localhost:3030/data/comments';

  getAll(recipeId:string){
   
    const query = encodeURIComponent(`recipeId="${recipeId}"`);
    
    const result = this.http.get<Comment[]>(`${this.baseUrl}?where=${query}`);
    const comments = Object.values(result);
    return comments;
};

addComment(recipeId:string, comment:any){
    const result = this.http.post<Comment>(this.baseUrl, {recipeId, comment});
    return result;
};

deleteComment(commentId:string):any{this.http.delete(`${this.baseUrl}/${commentId}`);}
}
