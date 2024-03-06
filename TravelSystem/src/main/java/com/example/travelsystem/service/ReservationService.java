package com.example.travelsystem.service;

import com.example.travelsystem.model.Reservation;

import java.util.List;

public interface ReservationService {
    Reservation getReservationById(Long id);
    List<Reservation> getAllReservations();
    Reservation createReservation(Reservation reservation);
    Reservation updateReservation(Long id, Reservation reservation);
    Reservation deleteReservation(Long id);
}