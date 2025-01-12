package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.common.dto.CreateTicketDto;
import com.example.demo.model.Ticket;
import com.example.demo.service.TicketService;
import org.springframework.web.bind.annotation.RequestParam;






@RestController
@RequestMapping("/tickets")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @PostMapping()
    public ResponseEntity<List<Ticket>> createTicket(@RequestBody CreateTicketDto dto) {
        List<Ticket> tickets = ticketService.createTickets(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(tickets);
    }

    @GetMapping()
    public ResponseEntity<List<Ticket>> findTickets() {
        List<Ticket> tickets = ticketService.findTickets();
        return ResponseEntity.status(HttpStatus.OK).body(tickets);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> findTicketById(@PathVariable("id") String id) {
        Ticket ticket = ticketService.findByTicketId(id);
        return ResponseEntity.status(HttpStatus.OK).body(ticket);
    }
    
    @GetMapping("/{id}/qr")
    public ResponseEntity<byte[]> getTicketQR(@PathVariable("id") String id) {
        byte[] ticketQRImage = ticketService.generateQRTicket(id);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_PNG);
        return ResponseEntity.status(HttpStatus.OK).headers(headers).body(ticketQRImage);
    }

    @GetMapping("/validate/{id}")
    public ResponseEntity<Ticket> validateTicket(@PathVariable("id") String id) {
        Ticket ticket = ticketService.validateTicket(id);
        return ResponseEntity.status(HttpStatus.OK).body(ticket);
    }
    
    
    
    
}
