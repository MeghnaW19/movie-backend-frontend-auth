import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from 'movies/movie-list.component';
import { MovieService } from 'movies/movie.service';
import { TrendingListComponent } from 'movies/trending-list.component';
import { UpcomingListComponent } from 'movies/upcoming-list.component';
//import { RecommendedListComponent } from 'movies/recommendation-list.component';
import { RecommendedMoviesComponent } from './recommended-movies/recommended-movies.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import { LoginService } from 'app/login.service';
import { RegisterServiceService } from 'app/register-service.service';




@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TrendingListComponent,
    UpcomingListComponent,
    //RecommendedListComponent,
    RecommendedMoviesComponent,
    RegisterComponent,
    LoginComponent
   
  
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'movie', component: MovieListComponent },
      { path: 'trending', component: TrendingListComponent },
      { path: 'forthcoming', component: UpcomingListComponent },
       { path: 'recommended', component: RecommendedMoviesComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      {path:'login',component: LoginComponent },
      {path:'register',component:RegisterComponent},
      { path: '**', redirectTo: 'login', pathMatch: 'full'}
  ])
  ],
  providers: [MovieService,
              LoginService,
              RegisterServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
