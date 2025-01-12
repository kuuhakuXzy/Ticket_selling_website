package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.common.dto.CreateUserDto;
import com.example.demo.common.dto.LoginRequestDto;
import com.example.demo.exception.UnauthorizedException;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import com.example.demo.utils.CustomUserDetails;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;



@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@Valid @RequestBody LoginRequestDto loginRequest, HttpServletRequest request ) {
        try {
            SecurityContext context = SecurityContextHolder.createEmptyContext();
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
            context.setAuthentication(authentication);
            SecurityContextHolder.setContext(context);
            HttpSession session = request.getSession(true);
            session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, context);
            System.out.println(SecurityContextHolder.getContext().getAuthentication());
            Map<String, String> responseBody = new HashMap<>();
            responseBody.put("sessionID", session.getId());
            CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
            responseBody.put("username", userDetails.getUsername());
            responseBody.put("userId", userDetails.getUserId().toString());
            return ResponseEntity.status(HttpStatus.OK).body(responseBody);
        } catch (AuthenticationException e) {
            throw new UnauthorizedException("Invalid credentials");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@Valid @RequestBody CreateUserDto userDto, HttpServletRequest request) {
        System.out.println(request.getSession());
        System.out.println(SecurityContextHolder.getContext().getAuthentication());
        User registeredUser = userService.createUser(userDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
    }
    
}
