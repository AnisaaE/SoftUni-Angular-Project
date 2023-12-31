import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeModule } from './recipe/recipe.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { AuthorizationInterceptorProvider } from './app-interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { commentReducer } from './recipe/detail/comment.reducer';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ comment: commentReducer}),
    CoreModule,
    HttpClientModule,
    RecipeModule,
    UserModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthorizationInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
