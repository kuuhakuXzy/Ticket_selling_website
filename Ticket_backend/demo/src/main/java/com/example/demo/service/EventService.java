package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.common.dto.CreateEventDto;
import com.example.demo.common.dto.QueryEventDto;
import com.example.demo.exception.NotFoundException;
import com.example.demo.model.Event;
import com.example.demo.model.User;
import com.example.demo.model.repositories.EventRepository;
import com.example.demo.model.repositories.UserRepository;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;

    public Event createEvent(CreateEventDto dto){
        Event newEvent = new Event(dto);
        Optional<User> organizer = userRepository.findByUserId(dto.getOrganizerId());
        if (organizer.isEmpty()) throw new NotFoundException("Organizer id not found");
        newEvent.setOrganizer(organizer.get());
        if (newEvent.getOrganizerName() == null) {
            newEvent.setOrganizerName(organizer.get().getUsername());
        }
        return eventRepository.save(newEvent);
    }

    public List<Event> findAllEvents() {
        return eventRepository.findAll();
    }

    public List<Event> findAllEvents(QueryEventDto queryEventDto) {
        return eventRepository.findEvents(queryEventDto.getTerm(), queryEventDto.getCategory(), queryEventDto.getLocation(), queryEventDto.getDate());
    }

    public Event findEventById(long id) {
        Optional<Event> event = eventRepository.findByEventId(id);
        if (event.isEmpty()) throw new NotFoundException("Event id not found");
        return event.get();
    }
}
