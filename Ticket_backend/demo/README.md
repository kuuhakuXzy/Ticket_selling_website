# Event Ticketing Back-end Application (REST API)

## Prerequisites

* [Java JDK 21] (https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
* [Gradle] (https://gradle.org/install/)

## Build the project
- Clone the project
- Run 
```bash
gradle build
```
after you have specified application properties in the `src/main/resources/application.properties` file.

## Application properties
- Configure your application properties in the `src/main/resources/application.properties` file (create folder `resources` in main then create the `application.properties` file if there isn't one). Example configurations include:

```properties
# Server Configuration
server.port=8080

# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/testdb
spring.datasource.username=root
spring.datasource.password=admin
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# Swagger (for API visualization)
springdoc.swagger-ui.path=/swagger-ui.html
```

- Make sure to set up your database (e.g., MySQL) and adjust the database configuration in `application.properties` as needed.
- If there isn't any change to any Model, change `spring.jpa.hibernate.ddl-auto` property to `update` to avoid dropping the database each time you start the application.

## Run the project
Run the application with:
```bash
gradle bootRun
```
Alternatively, after building the project, you can also run the JAR file directly:
```bash
java -jar target/<project-name>.jar
```

## Accessing the Application
Once the application is running, you can access it at:
```
http://localhost:8080
```
Additionally, access SwaggerUI page for API visualization at:
```
http://localhost:8080/swagger-ui.html
```
or what ever path is setup in `springdoc.swagger-ui.path` property as seen above
