package com.stackroute.MovieCruiserServer.Repository;

import com.stackroute.MovieCruiserServer.domain.Movie;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Transactional
public class MovieRepositoryTest {

    @Autowired
    MovieRepository repo;

    @Test
    public void testSaveMovie() throws Exception {
        repo.save(new Movie(1, "Spider Man", "Good", "Must Watch", null, 1));
        Movie movie = repo.getOne(1);
        assertThat(movie.getId()).isEqualTo(1);
    }

    @Test
    public void testUpdateMovie() throws Exception {
        repo.save(new Movie(1, "Spider Man", "Good", "Must Watch", null, 1));
        Movie movie = repo.getOne(1);
        assertEquals(movie.getName(),"Spider Man");
        movie.setComments("Avg");
        repo.save(movie);
        movie = repo.getOne(1);
        assertEquals(movie.getComments(),"Avg");
    }

    @Test
    public void testDeleteMovie() throws Exception {
        repo.save(new Movie(1, "Spider Man", "Good", "Must Watch", null, 1));
        Movie movie = repo.getOne(1);
        assertThat(movie.getId()).isEqualTo(1);
        repo.delete(movie);
        assertEquals(Optional.empty(),repo.findById(1
        ));
    }

    @Test
    public void testGetMovie() throws Exception {
        repo.save(new Movie(1, "Spider Man", "Good", "Must Watch", null, 1));
        Movie movie = repo.getOne(1);
        assertThat(movie.getId()).isEqualTo(1);
    }

    @Test
    public void testGetAllMovies() throws Exception {
        repo.save(new Movie(1, "Spider Man", "Good", "Must Watch", null, 1));
        repo.save(new Movie(2, "Spider Man - 2", "Good", "Must Watch", null, 1));

        List<Movie> movies = repo.findAll();
        assertEquals(movies.get(0).getName(),"Spider Man");
    }
}
