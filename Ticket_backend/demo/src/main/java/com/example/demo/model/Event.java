package com.example.demo.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.example.demo.common.dto.CreateEventDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Getter @Setter
    private long eventId;

    @ManyToOne(optional=false)
    @JsonIgnoreProperties("eventsCreated")
    @JoinColumn(name="organizerId", referencedColumnName="userId")
    @Getter @Setter
    private User organizer;

    @OneToMany(mappedBy="event", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
    @JsonManagedReference
    @Getter @Setter
    private List<Ticket> tickets;

    @Getter @Setter
    private String organizerName;

    @Getter @Setter
    @Column(nullable=false)
    private String eventName;

    @Lob
    @Getter @Setter
    private String eventDescription;

    @Getter @Setter
    private String location;

    @Getter @Setter
    private LocalDate eventDate;

    @Getter @Setter
    private LocalTime eventStartTime;

    @Getter @Setter
    private LocalTime eventEndTime;

    @Getter @Setter
    private String category;

    @Getter @Setter
    private long ticketPrice;

    @Getter @Setter
    private Integer maxAttendees;

    @Getter @Setter
    private Integer availableTickets;

    @Getter @Setter
    private Integer minTickets;

    @Getter @Setter
    private Integer maxTickets;

    public Event() {}

    public Event (User organizer, String organizerName, String eventName, String eventDescription, String location, LocalDate eventDate,
        LocalTime eventStartTime, LocalTime eventEndTime, String category, long ticketPrice, Integer maxAttendees, Integer availableTickets,
        Integer minTickets, Integer maxTickets) 
    {
        this.organizer = organizer;
        this.organizerName = organizerName;
        this.eventName = eventName;
        this.eventDescription = eventDescription;
        this.location = location;
        this.eventDate = eventDate;
        this.eventStartTime = eventStartTime;
        this.eventEndTime = eventEndTime;
        this.category = category;
        this.ticketPrice = ticketPrice;
        this.maxAttendees = maxAttendees;
        this.availableTickets = availableTickets != null ? availableTickets : this.maxAttendees;
        this.minTickets = minTickets != null ? minTickets : 1;
        this.maxTickets = maxTickets != null ? maxTickets : 1;
    }
    
    public Event (CreateEventDto dto) {
        this.organizerName = dto.getOrganizerName();
        this.eventName = dto.getEventName();
        this.eventDescription = dto.getEventDescription();
        this.location = dto.getLocation();
        this.eventDate = dto.getEventDate();
        this.eventStartTime = dto.getEventStartTime();
        this.eventEndTime = dto.getEventEndTime();
        this.category = dto.getCategory();
        this.ticketPrice = dto.getTicketPrice();
        this.maxAttendees = dto.getMaxAttendees();
        this.availableTickets = dto.getAvailableTickets() != null ? dto.getAvailableTickets() : dto.getMaxAttendees();
        this.minTickets = dto.getMinTickets() != null ? dto.getMinTickets() : 1;
        this.maxTickets = dto.getMaxTickets() != null ? dto.getMaxTickets() : 1;
    }

    public void successfulTicketBuy(int numberOfTickets) {
        this.availableTickets -= numberOfTickets;
    }

    public boolean checkNumberOfTickets(int numberOfTickets) {
        return (numberOfTickets >= this.minTickets && numberOfTickets <= this.maxTickets);
    }
}
