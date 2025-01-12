package com.example.demo.model.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Ticket;


public interface TicketRepository extends JpaRepository<Ticket, Object> {
    Optional<Ticket> findByTicketId(String ticketId);
}
