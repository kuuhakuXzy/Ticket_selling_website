package com.example.demo.model.repositories;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Event;

public interface EventRepository extends JpaRepository<Event, Object> {
    Optional<Event> findByEventId(long eventId);

    @Query("SELECT e FROM Event e WHERE " + 
            "(:eventNameQuery IS NULL OR e.eventName LIKE %:eventNameQuery%) AND " + 
            "(:category IS NULL OR e.category = :category) AND " +
            "(:location IS NULL OR e.location = :location) AND " +
            "(:date IS NULL OR e.eventDate = :date)")
    List<Event> findEvents(@Param("eventNameQuery") String eventNameQuery,
                            @Param("category") String category,
                            @Param("location") String location,
                            @Param("date") LocalDate date);
}
