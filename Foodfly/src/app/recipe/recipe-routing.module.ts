import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
;

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:recipeId', component: DetailComponent },
  { path: 'catalog/:recipeId/edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
