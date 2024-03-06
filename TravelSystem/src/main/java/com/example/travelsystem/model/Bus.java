package com.example.travelsystem.model;


import jakarta.persistence.*;

import java.util.Date;
import java.util.Set;

@Entity
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "bus", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Reservation> reservations;

    public Bus() {
    }

    public Bus(Date dateTime, int price, int freeSeats, String cityFrom, String cityTo, String address) {
        this.dateTime = dateTime;
        this.price=price;
        this.freeSeats = freeSeats;
        this.cityFrom = cityFrom;
        this.cityTo = cityTo;
        this.address = address;
    }

    private Date dateTime;
    private int price;
    private int freeSeats; // Indicates whether each seat is free or reserved

    private String cityFrom;
    private String cityTo;

    private String address;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCityFrom() {
        return cityFrom;
    }

    public void setCityFrom(String cityFrom) {
        this.cityFrom = cityFrom;
    }

    public String getCityTo() {
        return cityTo;
    }

    public void setCityTo(String cityTo) {
        this.cityTo = cityTo;
    }

    // Constructor

    // Getters and setters
    // Omitted for brevity

    // Method to reserve a seat

    public int getFreeSeats() {
        return freeSeats;
    }

    public void setFreeSeats(int freeSeats) {
        this.freeSeats = freeSeats;
    }

    // Method to check if a seat is free

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateTime() {
        return dateTime;
    }

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }

    public int getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "Bus{" +
                "dateTime=" + dateTime +
                ", price=" + price +
                ", freeSeats=" + freeSeats +
                ", cityFrom='" + cityFrom + '\'' +
                ", cityTo='" + cityTo + '\'' +
                ", address='" + address + '\'' +
                '}';
    }

    public void setPrice(int price) {
        this.price = price;
    }
}