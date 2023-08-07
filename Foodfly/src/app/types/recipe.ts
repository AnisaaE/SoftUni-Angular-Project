export interface Recipe {
    _ownerId: string;
    title: string;
    type: string;
    image: string;
    timing: string;
    portions: string;
    preparation: string;
    ingredients: string;
    _createdOn: number;
    comments?: Comment[];
}