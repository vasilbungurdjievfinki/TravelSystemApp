package com.example.travelsystem.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int price;
    @ManyToOne
    @JoinColumn(name = "bus_id")

    private Bus bus; // The bus being reserved

    private int seatNum;

    public Reservation(String name, int price, Bus bus, int seatNum, LocalDateTime reservationDate) {
        this.name = name;
        this.price = price;
        this.bus = bus;
        this.seatNum = seatNum;
        this.reservationDate = reservationDate;
    }

    public int getSeatNum() {
        return seatNum;
    }

    public void setSeatNum(int seatNum) {
        this.seatNum = seatNum;
    }

    private LocalDateTime reservationDate; // When the reservation was made

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Bus getBus() {
        return bus;
    }

    public void setBus(Bus bus) {
        this.bus = bus;
    }

    public LocalDateTime getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(LocalDateTime reservationDate) {
        this.reservationDate = reservationDate;
    }

    public Reservation() {
    }

    // Getters and setters
}