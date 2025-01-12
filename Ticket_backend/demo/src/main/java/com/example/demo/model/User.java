package com.example.demo.model;

import java.time.LocalDateTime;
import java.util.List;

import com.example.demo.common.dto.CreateUserDto;
import com.example.demo.common.enums.UserRole;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "app_user")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Getter @Setter
    private long userId;

    @Getter @Setter
    @Column(unique=true, nullable=false)
    private String username;

    @Getter @Setter
    @JsonIgnore
    @Column(nullable=false)
    private String password;

    @Getter @Setter
    @Column(nullable=false)
    private String firstName;

    @Getter @Setter
    private String lastName;

    @Getter @Setter
    @Column(unique=true, nullable=false)
    private String email;

    @Enumerated(EnumType.STRING)
    @Getter @Setter
    @Column(nullable=false)
    private UserRole userRole; 

    @Getter @Setter
    private String phoneNumber;

    @Getter @Setter
    private String address;

    @Getter @Setter
    private LocalDateTime dateCreated;

    @OneToMany(mappedBy="organizer", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
    @JsonManagedReference
    @Getter @Setter
    private List<Event> eventsCreated;

    @OneToMany(mappedBy="user", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
    @JsonManagedReference
    @Getter @Setter
    private List<Ticket> ticketsPurchased;

    @PrePersist
    protected void onCreate() {
        dateCreated = LocalDateTime.now();
    }

    public User() {}

    public User(String username, String password, String firstName, String lastName, String email, UserRole userRole, String phoneNumber, String address) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userRole = userRole;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    public User(CreateUserDto userDto) {
        this.username = userDto.getUsername();
        this.password = userDto.getPassword();
        this.firstName = userDto.getFirstName();
        this.lastName = userDto.getLastName();
        this.email = userDto.getEmail();
        this.userRole = userDto.getUserRole();
        this.phoneNumber = userDto.getPhoneNumber();
        this.address = userDto.getAddress();
    }
}


