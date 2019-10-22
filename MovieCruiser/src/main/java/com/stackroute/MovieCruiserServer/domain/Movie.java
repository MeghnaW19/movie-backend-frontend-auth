package com.stackroute.MovieCruiserServer.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;


@Entity
public class Movie {

    @Id
    private int id;
    private String name;
    private String comments;
    private String posterPath;
    private Date releaseDate;
    private int voteCount;

    public Movie() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getPosterPath() {
        return posterPath;
    }

    public void setPosterPath(String posterPath) {
        this.posterPath = posterPath;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public int getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(int voteCount) {
        this.voteCount = voteCount;
    }

    public Movie(int id, String name, String comments, String posterPath, Date releaseDate,  int voteCount) {
        this.id = id;
        this.name = name;
        this.comments = comments;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.voteCount = voteCount;
    }

}
