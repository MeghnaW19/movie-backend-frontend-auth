From java:8-jre
WORKDIR usr/src
ENV MYSQL_DATABASE=movieDb
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=root
ENV MYSQL_CI_URL=jdbc:mysql://localhost:3306/movieDb
ADD ./target/MovieAuthentication-0.0.1-SNAPSHOT.jar /usr/src/MovieAuthentication-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "MovieAuthentication-0.0.1-SNAPSHOT.jar"]
