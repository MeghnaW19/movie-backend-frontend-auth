package com.stackroute.MovieCruiserServer.service;


import com.stackroute.MovieCruiserServer.Exception.MovieAlreadyExistException;
import com.stackroute.MovieCruiserServer.Exception.MovieNotFoundException;
import com.stackroute.MovieCruiserServer.Repository.MovieRepository;
import com.stackroute.MovieCruiserServer.domain.Movie;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static junit.framework.TestCase.assertNotNull;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

public class MovieServiceImplTest {

    @Mock
    MovieRepository movieRepo;

    Movie movie;

    @InjectMocks
    MovieServiceImpl movieServiceImpl;

    Optional<Movie> options;

    @Before
    public void setupMock(){
        MockitoAnnotations.initMocks(this);
        movie = new Movie(1, "Spider Man", "Good", "Must Watch", null, 1);
        options = Optional.of(movie);
    }

    @Test
    public void testMockCreation(){
        assertNotNull("JPACreation fails");
    }

    @Test
    public void testAddMovieSuccess() throws MovieAlreadyExistException {
        when(movieRepo.save(movie)).thenReturn(movie);
        Movie tempMovie = movieServiceImpl.addMovie(movie);
        assertEquals(movie.getName(),tempMovie.getName());
    }

    @Test(expected = MovieAlreadyExistException.class)
    public void testAddMovieFailure() throws MovieAlreadyExistException {
        when(movieRepo.findById(1)).thenReturn(options);
        when(movieRepo.save(movie)).thenReturn(movie);
        Movie tempMovie = movieServiceImpl.addMovie(movie);
        assertEquals(movie.getName(),tempMovie.getName());
    }

    @Test
    public void testUpdateMovieSuccess() throws Exception {

        when(movieRepo.save(movie)).thenReturn(movie);
        Movie tempMovie = movieServiceImpl.addMovie(movie);
        when(movieRepo.findById(1)).thenReturn(options);

        tempMovie.setComments("Avg");
        Movie tempMovie1 = movieServiceImpl.updateComment(1,tempMovie);
        assertEquals(tempMovie1.getComments(),"Avg");
    }

    @Test(expected = MovieAlreadyExistException.class)
    public void testUpdateMovieFailure() throws Exception {

        when(movieRepo.save(movie)).thenReturn(movie);
        when(movieRepo.findById(1)).thenReturn(options);
        Movie tempMovie = movieServiceImpl.addMovie(movie);
        tempMovie.setComments("Avg");
        Movie tempMovie1 = movieServiceImpl.updateComment(1,tempMovie);
        assertEquals(tempMovie1.getComments(),"Avg");
    }
    


}
