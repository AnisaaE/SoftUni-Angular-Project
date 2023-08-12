import { createReducer, on } from '@ngrx/store';
import { addComment, removeComment } from './comment.actions'; // Create these actions
import { Comment } from 'src/app/types/recipe';



export interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = {
  comments: []
};

export const commentReducer = createReducer(
  initialState,
  on(addComment, (state, { comment }) => ({
    ...state,
    comments: [...state.comments, comment]
  })),
  on(removeComment, (state, { commentId }) => ({
    ...state,
    comments: state.comments.filter(comment => comment._id !== commentId)
  }))
);
