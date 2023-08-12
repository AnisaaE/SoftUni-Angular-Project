import { createAction, props } from '@ngrx/store';
import { Comment } from 'src/app/types/recipe';

export const addComment = createAction(
  '[Comment] Add Comment',
  props<{ comment: any }>()
);

export const removeComment = createAction(
  '[Comment] Remove Comment',
  props<{ commentId: string }>()
);
