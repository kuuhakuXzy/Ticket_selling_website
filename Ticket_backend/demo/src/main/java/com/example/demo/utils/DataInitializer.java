package com.example.demo.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.demo.common.enums.UserRole;
import com.example.demo.model.User;
import com.example.demo.model.repositories.UserRepository;

@Component
public class DataInitializer {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Bean
    public CommandLineRunner initData(){
        return args -> {
            if (userRepository.count() == 0){
                User admin = new User();
                admin.setUsername("tan2908");
                admin.setPassword(bCryptPasswordEncoder.encode("1234"));
                admin.setFirstName("tan");
                admin.setLastName("tran");
                admin.setEmail("tan@gmail.com");
                admin.setUserRole(UserRole.ROLE_ADMIN);
                userRepository.save(admin);
            }
        };
    }
}
