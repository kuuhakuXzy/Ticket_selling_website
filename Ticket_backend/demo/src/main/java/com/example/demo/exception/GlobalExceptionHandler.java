package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.servlet.http.HttpServletRequest;


@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ExceptionObject> handleNotFoundException(NotFoundException e, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ExceptionObject(e.getMessage(), HttpStatus.NOT_FOUND, request.getRequestURI()));
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ExceptionObject> handleAccessDeniedException(AccessDeniedException e, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ExceptionObject(e.getMessage(), HttpStatus.FORBIDDEN, request.getRequestURI()));
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ExceptionObject> handleBadRequestException(BadRequestException e, HttpServletRequest request){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ExceptionObject(e.getMessage(), HttpStatus.BAD_REQUEST, request.getRequestURI()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionObject> handleMethodArgumentNotValidException(MethodArgumentNotValidException e, HttpServletRequest request){
        String error = e.getBindingResult().getFieldErrors().get(0).getDefaultMessage();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ExceptionObject(error, HttpStatus.BAD_REQUEST, request.getRequestURI()));
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ExceptionObject> handleHttpMessageNotReadableException(HttpMessageNotReadableException e, HttpServletRequest request){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ExceptionObject("Unable to read JSON request: " + e.getMessage(), HttpStatus.BAD_REQUEST, request.getRequestURI()));
    }

    @ExceptionHandler(UnauthorizedException.class)
    public ResponseEntity<ExceptionObject> handleUnauthorizedException(UnauthorizedException e, HttpServletRequest request){
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ExceptionObject(e.getMessage(), HttpStatus.UNAUTHORIZED, request.getRequestURI()));
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ExceptionObject> handleAuthenticationException(AuthenticationException e, HttpServletRequest request){
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ExceptionObject(e.getMessage(), HttpStatus.UNAUTHORIZED, request.getRequestURI()));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionObject> handleUnwantedException(Exception e, HttpServletRequest request) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ExceptionObject("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR, request.getRequestURI()));
    }
}
