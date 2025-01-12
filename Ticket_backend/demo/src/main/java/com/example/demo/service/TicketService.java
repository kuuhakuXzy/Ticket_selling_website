package com.example.demo.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.example.demo.common.dto.CreateTicketDto;
import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.NotFoundException;
import com.example.demo.model.Event;
import com.example.demo.model.Ticket;
import com.example.demo.model.User;
import com.example.demo.model.repositories.EventRepository;
import com.example.demo.model.repositories.TicketRepository;
import com.example.demo.model.repositories.UserRepository;
import com.example.demo.utils.QRCodeGenerator;
import com.google.zxing.WriterException;


@Service
public class TicketService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private Environment environment;

    public List<Ticket> createTickets(CreateTicketDto dto){
        Optional<User> user = userRepository.findByUserId(dto.getUserId());
        if (user.isEmpty()) throw new NotFoundException("User not found!");
        Optional<Event> event = eventRepository.findByEventId(dto.getEventId());
        if (event.isEmpty()) throw new NotFoundException("Event not found!");
        
        List<Ticket> tickets = new ArrayList<>();
        if (!event.get().checkNumberOfTickets(dto.getNumberOfTickets())) throw new BadRequestException("The number of tickets is not valid!");
        for (int i = 0; i < dto.getNumberOfTickets(); i++) {
            Ticket ticket = new Ticket();
            ticket.setUser(user.get());
            ticket.setEvent(event.get());
            tickets.add(ticket);
        }

        List<Ticket> results = ticketRepository.saveAll(tickets);
        event.get().successfulTicketBuy(dto.getNumberOfTickets());
        eventRepository.save(event.get());
        return results;

    }

    public List<Ticket> findTickets() {
        return ticketRepository.findAll();
    }

    public Ticket findByTicketId(String id) {
        Optional<Ticket> ticket = ticketRepository.findByTicketId(id);
        if (ticket.isEmpty()) throw new NotFoundException("Ticket id not found!");
        else return ticket.get();
    }

    public byte[] generateQRTicket(String id) {
        findByTicketId(id);
        String baseUrl = environment.getProperty("app.base-url");
        String url = baseUrl + "/validate/" + id;
        try {
            byte[] qrcode = QRCodeGenerator.getQRCodeImage(url, 250, 250);
            return qrcode;
        }
        catch (WriterException | IOException e) {
            throw new BadRequestException("Failed to generate QR code");
        }
        
    }

    public Ticket validateTicket(String id){
        Ticket ticket = findByTicketId(id);
        if (ticket.isUsedTicket()) throw new BadRequestException("this ticket is already used");
        else {
            ticket.setUsedTicket(true);
            return ticketRepository.save(ticket);
        }
    }
}
