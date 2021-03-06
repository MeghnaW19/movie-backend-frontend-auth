import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {Movie} from './movie-cruiser';
//import { IMovie } from './movie';
import { IResult } from 'movies/result';


@Injectable()
export class MovieService {
   private _movieUpcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=c151506a66c898dc3443d41f1636ebde&language=en-US';
   private _moviePopularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=c151506a66c898dc3443d41f1636ebde&language=en-US&page=1';

        private _movieRecommendedListUrl = 'http://localhost:8080/api/movie';
        private _movieRecommendUrl = 'http://localhost:8080/api/movie';



    constructor(private _http: HttpClient) { }

    getTrendingMovies(): Observable<IResult> {
        return this._http.get<IResult>(this._moviePopularUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getUpcomingMovies(): Observable<IResult> {
        return this._http.get<IResult>(this._movieUpcomingUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getRecommendedMovies(): Observable<any> {
         return this._http.get<any>(this._movieRecommendedListUrl)
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }

    recommendMovies(Movie): Observable<any> {
         return this._http.post<any>(this._movieRecommendUrl, Movie)
                  .do(data => console.log('All: ' + JSON.stringify(data)))
                  .catch(this.handleError);
    }
    editMovie(Movie): Observable<any>{
        return this._http.put<any>(this._movieRecommendUrl+"/"+Movie.id,Movie)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}
