package com.stackroute.MovieCruiserServer.controller;

import com.stackroute.MovieCruiserServer.Exception.MovieAlreadyExistException;
import com.stackroute.MovieCruiserServer.Exception.MovieNotFoundException;
import com.stackroute.MovieCruiserServer.domain.Movie;
import com.stackroute.MovieCruiserServer.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/movie")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping()
    public ResponseEntity<List<Movie>> GetAllMovies(){
        List<Movie> movieData=movieService.getMovieList();
        return new ResponseEntity<List<Movie>>(movieData, HttpStatus.OK);
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<?> GetMovieById(@PathVariable int id){
        ResponseEntity<?> responseEntity;
        try{
         Movie movieData =movieService.getMovie(id);
            responseEntity=new ResponseEntity<Movie>(movieData, HttpStatus.OK);
        }
        catch (MovieNotFoundException e){
            responseEntity= new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
       return responseEntity;
    }

    @PostMapping()
    public ResponseEntity<?> AddMovie(@RequestBody Movie movie){
        ResponseEntity<?> responseEntity;
        try {
            Movie movieData = movieService.addMovie(movie);
            responseEntity = new ResponseEntity<Movie>(movieData, HttpStatus.CREATED);
        }
        catch (MovieAlreadyExistException e){
            try {
                movieService.deleteMovie(movie.getId());
            }
            catch (MovieNotFoundException e1) {
                responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
            }

            responseEntity = new ResponseEntity<String>("{ \"msg\" : \" Success\"}", HttpStatus.OK);
        }
        return responseEntity;
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> UpdateComment(@PathVariable int id, @RequestBody Movie movie)
    {
        ResponseEntity<?> responseEntity;
        try {
            Movie movieData=movieService.updateComment(id,movie);
            responseEntity = new ResponseEntity<Movie>(movieData, HttpStatus.CREATED);
        }
        catch (MovieNotFoundException e){
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> DeleteMovie(@PathVariable int id) {
        ResponseEntity<?> responseEntity;
        try {
            String movieDate = movieService.deleteMovie(id);
            responseEntity = new ResponseEntity<String>( HttpStatus.OK);
        }
        catch (MovieNotFoundException e){
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

}
