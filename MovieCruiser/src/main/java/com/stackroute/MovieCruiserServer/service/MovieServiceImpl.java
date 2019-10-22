package com.stackroute.MovieCruiserServer.service;

import com.stackroute.MovieCruiserServer.Exception.MovieAlreadyExistException;
import com.stackroute.MovieCruiserServer.Exception.MovieNotFoundException;
import com.stackroute.MovieCruiserServer.Repository.MovieRepository;
import com.stackroute.MovieCruiserServer.domain.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//import org.json.simple.JSONObject;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Service
public class MovieServiceImpl implements MovieService {
    @Autowired
    MovieRepository movieRepository;
    @Override
    public List<Movie> getMovieList(){
        List<Movie> movies = movieRepository.findAll();
        return movies;
    }
    @Override
    public  Movie getMovie(int id) throws MovieNotFoundException {
      Movie movie= movieRepository.findById(id).get();
       if(movie==null)
       {
           throw new MovieNotFoundException("Movie Not Found!");
       }
       else
       {
           return movie;
       }
    }
    @Override
    public Movie addMovie(Movie movie) throws MovieAlreadyExistException {
        Optional<Movie> movieData = movieRepository.findById(movie.getId());
        if (movieData.isPresent()) {
            throw new MovieAlreadyExistException("Movie Already Exists!");
        } else {
            return movieRepository.save(movie);
        }
    }
    @Override
    public Movie updateComment(int id, Movie movie) throws MovieNotFoundException{
        Optional<Movie> movieData = movieRepository.findById(id);
        if (movieData.isPresent()) {
            return movieRepository.save(movie);
        } else {
            throw new MovieNotFoundException("Movie Not Found!");
        }
    }
    @Override
    public String deleteMovie(int id) throws MovieNotFoundException{
        Optional<Movie> movieData = movieRepository.findById(id);
        if (movieData.isPresent()) {
            movieRepository.deleteById(id);
            return "Successfully Deleted";
        } else {
            throw new MovieNotFoundException("Could Not Delete , Movie Not Found!");
        }

    }


}
