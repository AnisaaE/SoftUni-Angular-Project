import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './recipe/catalog/catalog.component';
import { DetailComponent } from './recipe/detail/detail.component';
import { CreateComponent } from './recipe/create/create.component';
import { EditComponent } from './recipe/edit/edit.component';

const routes: Routes = [
   {
  path: '',
  pathMatch: 'full',
  redirectTo: '/home',
},
{ path: 'home', component: HomeComponent },
{ path: 'catalog', component: CatalogComponent },
{path:'catalog/:recipeId' , component:DetailComponent},
{path:'catalog/:recipeId/edit' , component:EditComponent},
{ path: 'create', component: CreateComponent },


{ path: 'about', component: AboutComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
// { path: 'user/profile', component: ProfileComponent }
{ path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
