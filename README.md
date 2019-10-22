## Movie Application ##

This movie application uses tmdb to get the movies list.
It uses the TMDB api to list the Popular Movies and upcoming movies. User can register and login to this application. After login User can add or remove movies to his watch list.
User can also add comments to the movie.

This application divided into three parts

```sh
FrontEND - Angular 4
Server - User Authentication and Movie service
```
* Front end is developed using Angular
* Backend uses springboot, mysql database

api's :

    user:

        post:   localhost:8082/user/register

        {
            "userId":"Jesu",
            "firstName":"Jesu",
            "lastName":"doss",
            "password":"123"
        }
        
         output: 

        {
            "message": "Registered Successfully"
        }

        post:   localhost:8082/user/login

        {
            "userId":"Jesu",
            "password":"123"
        }


        output: 

       HttpStatus.OK

movie:

    post:   localhost:8089/api/movie


        {
            "name":"MIB",
            "comments":"good movie",
            "posterPath":"xyz",
            "releaseDate":"1989",
            "voteAverage":"65",
            "voteCount":"28374",
            "userId":"Jesu"
        }

    put:    localhost:8089/api/movie/0
        output

        {
            "id": 0,
            "name": "MIB",
            "comments": "good movie",
            "posterPath": "xyz",
            "releaseDate": "1989",
            "voteAverage": 65,
            "voteCount": 28374,
            "userId": "Jesu"
        }

    delete:     localhost:8089/api/movie/0

        output: movie deleted successfully

    get movie by id:

        get:     localhost:8089/api/movie/0

        output:

        {
            "id": 0,
            "name": "MIB",
            "comments": "good movie",
            "posterPath": "xyz",
            "releaseDate": "1989",
            "voteAverage": 65,
            "voteCount": 28374,
            "userId": "Jesu"
        }

    getAll:

        get:    localhost:8089/api/movie/

        success


