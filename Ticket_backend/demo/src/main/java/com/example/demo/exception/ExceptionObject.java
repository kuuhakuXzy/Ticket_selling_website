package com.example.demo.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import lombok.Getter;
import lombok.Setter;

public class ExceptionObject {
    @Getter @Setter
    private String status;

    @Getter @Setter
    private Integer statusCode;

    @Getter @Setter
    private String message;

    @Getter @Setter
    private LocalDateTime timestamp;

    @Getter @Setter
    private String path;

    public ExceptionObject(String message, HttpStatus httpStatus, String path) {
        this.message = message;
        this.status = httpStatus.toString();
        this.statusCode = httpStatus.value();
        this.timestamp = LocalDateTime.now();
        this.path = path;
    }
}
