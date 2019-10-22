package com.stackroute.MovieCruiserServer.Repository;

import com.stackroute.MovieCruiserServer.domain.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
}
