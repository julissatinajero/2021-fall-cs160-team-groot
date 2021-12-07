FROM maven:3.8-jdk-8 AS build
COPY pom.xml ./
RUN mvn -f ./pom.xml clean package

FROM openjdk:11
WORKDIR /app
EXPOSE 8080
COPY target/foodfinder-spring-docker.jar app.jar
ADD src/main/resources/application.properties /app/src/main/resources/application.properties
CMD ["java", "-jar", "app.jar"]