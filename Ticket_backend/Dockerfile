FROM gradle:8.10.2-jdk21 AS builder

WORKDIR /app

COPY ./demo /app/demo

RUN gradle -p /app/demo bootJar

FROM openjdk:21-jdk-slim

WORKDIR /app

COPY ./demo /app/demo

COPY --from=builder /app/demo/build/libs/*.jar app.jar

RUN apt-get update && apt-get install -y netcat-traditional && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /app/demo/src/main/resources

RUN echo "server.port=8080" > demo/src/main/resources/application.properties && \
    echo "spring.datasource.url=jdbc:mysql://EventTicketing:3306/TicketingDB" >> demo/src/main/resources/application.properties && \
    echo "spring.datasource.username=root" >> demo/src/main/resources/application.properties && \
    echo "spring.datasource.password=admin" >> demo/src/main/resources/application.properties && \
    echo "spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver" >> demo/src/main/resources/application.properties && \
    echo "spring.jpa.hibernate.ddl-auto=create-drop" >> demo/src/main/resources/application.properties && \
    echo "spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect" >> demo/src/main/resources/application.properties

COPY wait.sh wait.sh
RUN chmod +x wait.sh

EXPOSE 8080

ENTRYPOINT [ "/app/wait.sh", "--", "java", "-jar", "-Ddebug", "/app/app.jar" ]