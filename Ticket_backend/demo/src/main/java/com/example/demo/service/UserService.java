package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.common.dto.CreateUserDto;
import com.example.demo.common.dto.LoginRequestDto;
import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.NotFoundException;
import com.example.demo.exception.UnauthorizedException;
import com.example.demo.model.User;
import com.example.demo.model.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    private boolean checkUser (CreateUserDto userDto){
        boolean usernameCheck = userRepository.findByUsername(userDto.getUsername()).isEmpty();
        boolean emailCheck = userRepository.findByEmail(userDto.getEmail()).isEmpty();
        System.out.println(usernameCheck);
        System.out.print(emailCheck);
        return (usernameCheck && emailCheck);
    }

    public User createUser(CreateUserDto userDto) {
        if (!checkUser(userDto)) throw new BadRequestException("Username or email already exists in the database!");
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        User user = new User(userDto);
        return userRepository.save(user);
    }

    public List<User> findAllUsers(){
        return userRepository.findAll();
    }

    public User findUserById(long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        }
        else {
            throw new NotFoundException("User with id " + id + " not found");
        }
    }

    public User findUserByUsername(String username){
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()){
            return user.get();
        }
        else {
            throw new NotFoundException("User with username " + username + " not found");
        }
    }

    public boolean checkCredentials(LoginRequestDto request){
        Optional<User> user = userRepository.findByUsername(request.getUsername());
        if (user.isEmpty()){
            throw new UnauthorizedException("Invalid credentials");
        }
        return checkPassword(request.getPassword(), user.get().getPassword());
    }

    private boolean checkPassword(String rawPassword, String hashedPassword) {
        return passwordEncoder.matches(rawPassword, hashedPassword);
    }

}
