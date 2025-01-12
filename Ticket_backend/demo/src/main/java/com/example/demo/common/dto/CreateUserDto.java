package com.example.demo.common.dto;


import com.example.demo.common.enums.UserRole;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

public class CreateUserDto {
    @NotNull(message="Username cannot be empty")
    @NotBlank(message="Username cannot be empty")
    @Size(min=4, max=20, message="Username must be between 4 and 20 characters")
    @Getter @Setter
    private String username;

    @NotNull(message="Username cannot be empty")
    @NotBlank(message="Password cannot be empty")
    @Size(min=4, max=20, message="Username must be between 4 and 20 characters")
    @Getter @Setter
    private String password;

    @NotNull(message="Username cannot be empty")
    @NotBlank(message="First name cannot be empty")
    @Getter @Setter
    private String firstName;

    @NotBlank(message="Last name cannot be empty")
    @Getter @Setter
    private String lastName;

    @NotBlank(message="Email cannot be empty")
    @Email(message="Email is not in correct format")
    @Getter @Setter
    private String email;

    @Getter @Setter
    private UserRole userRole = UserRole.ROLE_USER;

    @Getter @Setter
    private String phoneNumber;

    @Getter @Setter
    private String address;
}
