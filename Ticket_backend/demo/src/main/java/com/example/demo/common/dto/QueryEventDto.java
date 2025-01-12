package com.example.demo.common.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

public class QueryEventDto {
    @Getter @Setter
    private String term;

    @Getter @Setter
    private String category;

    @Getter @Setter
    private String location;

    @Getter @Setter
    private LocalDate date;

}
