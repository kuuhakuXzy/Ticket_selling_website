package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.common.dto.CreateEventDto;
import com.example.demo.common.dto.QueryEventDto;
import com.example.demo.model.Event;
import com.example.demo.service.EventService;

import jakarta.validation.Valid;




@RestController
@RequestMapping("/events")
public class EventController {
    @Autowired
    private EventService eventService;

    @PostMapping()
    @PreAuthorize("hasRole('ROLE_BUSINESS')")
    public ResponseEntity<Event> createEvent(@Valid @RequestBody CreateEventDto dto) {
        Event newEvent = eventService.createEvent(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(newEvent);
    }
    
    @GetMapping()
    public ResponseEntity<List<Event>> findAllEvents(@Valid @ModelAttribute QueryEventDto queryEventDto) {
        List<Event> eventList = eventService.findAllEvents(queryEventDto);
        return ResponseEntity.status(HttpStatus.OK).body(eventList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> findEventById(@PathVariable long id) {
        Event event = eventService.findEventById(id);
        return ResponseEntity.status(HttpStatus.OK).body(event);
    }
    
    
}
