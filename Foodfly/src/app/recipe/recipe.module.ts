import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { TypesOfRecipiesComponent } from './catalog/types-of-recipies/types-of-recipies.component';
import { CommentComponent } from './detail/comment/comment.component';
import { DeleteComponent } from './detail/delete/delete.component';


@NgModule({
  declarations: [
    CatalogComponent,
    DetailComponent,
    TypesOfRecipiesComponent,
    CommentComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule, RouterModule,
  ],
  exports:[CatalogComponent, DetailComponent]
})
export class RecipeModule { }
