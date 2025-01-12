package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.model.repositories.UserRepository;
import com.example.demo.utils.CustomUserDetails;

@Service
public class LoginService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isEmpty()){
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new CustomUserDetails(
            user.get().getUserId(),
            user.get().getUsername(),
            user.get().getPassword(),
            AuthorityUtils.createAuthorityList(user.get().getUserRole().name())
        );
    }
}
    

