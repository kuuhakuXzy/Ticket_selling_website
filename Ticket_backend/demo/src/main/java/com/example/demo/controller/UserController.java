package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.common.dto.CreateUserDto;
import com.example.demo.model.Ticket;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

import jakarta.validation.Valid;






@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody CreateUserDto entity) {
        User newUser = userService.createUser(entity);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping
    public ResponseEntity<List<User>> findAllUsers() {
        List<User> results = userService.findAllUsers();
        return ResponseEntity.status(HttpStatus.OK).body(results);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") long id) {
        User user = userService.findUserById(id);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @GetMapping("/me")
    public ResponseEntity<User> getMyInfo(Authentication authentication) {
        String username = authentication.getName();
        User user = userService.findUserByUsername(username);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }
    
    @GetMapping("/{id}/tickets")
    public ResponseEntity<List<Ticket>> getTickets(@PathVariable("id") long id){
        User user = userService.findUserById(id);
        List<Ticket> tickets = user.getTicketsPurchased();
        return ResponseEntity.status(HttpStatus.OK).body(tickets);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/{id}")
    public String putMethodName(@PathVariable("id") long id, @RequestBody String entity) {
        //TODO: process PUT request
        
        return entity;
    }
    
}
