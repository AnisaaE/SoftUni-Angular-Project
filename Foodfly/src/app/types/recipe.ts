export interface Recipe {
    _ownerId: string;
    _id: string;
    title: string;
    type: string;
    image: string;
    timing: string;
    portions: string;
    preparation: string;
    state: string;
    ingredients: string;
    _createdOn?: number;
    comments?: Comment[];
}
export interface Comment {
    _ownerId: string;
    recipeId: string;
    comment?: string;
    _createdOn?: number;
    _id: string,
    username: string;
    CharacterData?:any
}