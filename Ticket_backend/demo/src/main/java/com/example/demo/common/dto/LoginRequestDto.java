package com.example.demo.common.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

public class LoginRequestDto {
    @NotBlank(message="Username cannot be empty")
    @Getter @Setter
    private String username;

    @NotBlank(message="Password cannot be empty")
    @Getter @Setter
    private String password;
}
