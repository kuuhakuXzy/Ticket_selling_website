package com.example.demo.model.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User;


public interface UserRepository extends JpaRepository<User, Object> {
    Optional<User> findByUserId(long userId);
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    List<User> findByUsernameContaining(String usernamePart);
}
