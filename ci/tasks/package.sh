#!/bin/bash

set -e +x

apt-get update && apt-get install -y maven

echo $PATH

echo $mvn -version


pushd movie_fsd
  echo "Packaging JAR"
   mvn clean package -DskipTests
popd


#echo $(ls ./movie_fsd/target/*.*)

find movie_fsd/MovieCruiser/target -type f -name *.jar -exec cp "{}" package-output/movie_crusier.jar \;

find movie_fsd/MovieAuth/target -type f -name *.jar -exec cp "{}" package-output/movie_auth.jar \;

apt-get install -y nodejs npm
cd movie_fsd/MovieCruiserUI
npm install

echo "Done packaging"
exit 0
