package com.example.demo.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    @Getter @Setter
    private String ticketId;

    @ManyToOne(optional=false)
    @JsonIgnoreProperties({"ticketsPurchased", "eventsCreated"})
    @JoinColumn(name="userId", referencedColumnName="userId")
    @Getter @Setter
    private User user;

    @ManyToOne(optional=false)
    @JsonIgnoreProperties({"tickets", "organizer"})
    @JoinColumn(name="eventId", referencedColumnName="eventId")
    @Getter @Setter
    private Event event;

    @Getter @Setter
    private LocalDateTime purchasedDate;

    @Getter @Setter
    private boolean usedTicket;

    public Ticket(User user, Event event){
        this.user = user;
        this.event = event;
        this.usedTicket = false;
        this.purchasedDate = LocalDateTime.now();
    }

    public Ticket() {
        this.purchasedDate = LocalDateTime.now();
        this.usedTicket = false;
    }



    

}
