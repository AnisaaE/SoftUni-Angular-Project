import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CatalogComponent } from './catalog/catalog.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { TypesOfRecipiesComponent } from './catalog/types-of-recipies/types-of-recipies.component';
import { CommentComponent } from './detail/comment/comment.component';
import { DeleteComponent } from './detail/delete/delete.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { ImgUrlValidatorDirective } from './img-url-validator.directive';
import { EditComponent } from './edit/edit.component';
import { commentReducer } from './detail/comment.reducer';
import { RecipeRoutingModule } from './recipe-routing.module';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    CatalogComponent,
    DetailComponent,
    TypesOfRecipiesComponent,
    CommentComponent,
    DeleteComponent,
    CreateComponent,
    ImgUrlValidatorDirective,
    EditComponent,
    FilterComponent
  ],
  imports: [
    CommonModule, RouterModule,FormsModule, StoreModule.forFeature('comment', commentReducer), RecipeRoutingModule
  ],
  exports:[CatalogComponent, DetailComponent]
})
export class RecipeModule { }
