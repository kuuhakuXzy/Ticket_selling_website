package com.example.demo.common.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

public class CreateEventDto {
    @NotNull(message="Organizer id must not be empty")
    @Getter @Setter
    private long organizerId;

    @Getter @Setter
    private String organizerName;

    @NotBlank(message="Event name must not be empty")
    @Getter @Setter
    private String eventName;

    @Getter @Setter
    private String eventDescription;

    @NotBlank(message="Location must not be empty")
    @Getter @Setter
    private String location;

    @NotNull(message="Event date must not be empty")
    @Getter @Setter
    private LocalDate eventDate;

    @NotNull(message="Event start time must not be empty")
    @Getter @Setter
    private LocalTime eventStartTime;

    @Getter @Setter
    private LocalTime eventEndTime;

    @Getter @Setter
    private String category;

    @NotNull(message="Ticket price must not be empty")
    @Getter @Setter
    private long ticketPrice;

    @NotNull(message="Maximum number of attendees must not be empty")
    @Positive(message="Maximum number of attendees must be a positive number")
    @Getter @Setter
    private Integer maxAttendees;

    @PositiveOrZero(message="Number of available tickets must be a positive number")
    @Getter @Setter
    private Integer availableTickets;

    @Positive(message="Number of minimum tickets must be a positive number")
    @Getter @Setter
    private Integer minTickets;

    @Positive(message="Number of maximum tickets must be a positive number")
    @Getter @Setter
    private Integer maxTickets;
}
