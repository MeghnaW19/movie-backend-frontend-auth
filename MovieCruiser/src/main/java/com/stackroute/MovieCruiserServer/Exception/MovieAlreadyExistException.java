package com.stackroute.MovieCruiserServer.Exception;
@SuppressWarnings("serial")
public class MovieAlreadyExistException extends Exception {

    String message;
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public MovieAlreadyExistException(String message) {
        super(message);
        this.message = message;
    }

    @Override
    public String toString() {
        return "MovieAlreadyExistException{" +
                "message='" + message + '\'' +
                '}';
    }
}
