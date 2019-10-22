package com.stackroute.MovieCruiserServer.service;

import com.stackroute.MovieCruiserServer.Exception.MovieAlreadyExistException;
import com.stackroute.MovieCruiserServer.Exception.MovieNotFoundException;
import com.stackroute.MovieCruiserServer.domain.Movie;

import java.util.List;


public interface MovieService {
    List<Movie> getMovieList();

    Movie getMovie(int id) throws MovieNotFoundException;

    Movie addMovie(Movie movie) throws MovieAlreadyExistException;

    Movie updateComment(int id, Movie movie) throws MovieNotFoundException;

    String deleteMovie(int id) throws MovieNotFoundException;
}
