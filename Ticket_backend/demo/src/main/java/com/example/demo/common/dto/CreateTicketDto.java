package com.example.demo.common.dto;

import lombok.Getter;
import lombok.Setter;

public class CreateTicketDto {
    @Getter @Setter
    private long userId;

    @Getter @Setter
    private long eventId;

    @Getter @Setter
    private Integer numberOfTickets;
}
