package com.example.travelsystem.service.impl;

import com.example.travelsystem.model.Reservation;
import com.example.travelsystem.repository.ReservationRepository;
import com.example.travelsystem.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private final ReservationRepository reservationRepository;

    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    @Override
    public Reservation getReservationById(Long id) {
        Optional<Reservation> reservationOptional = reservationRepository.findById(id);
        return reservationOptional.orElse(null);
    }

    @Override
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    @Override
    public Reservation createReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    @Override
    public Reservation updateReservation(Long id, Reservation reservation) {
        if (!reservationRepository.existsById(id)) {
            return null;
        }
        reservation.setId(id); // Ensure the provided reservation object has the correct ID
        return reservationRepository.save(reservation);
    }

    @Override
    public Reservation deleteReservation(Long id) {
        Reservation r=reservationRepository.findById(id).orElse(null);
        reservationRepository.deleteById(r.getId());
        return r;

    }
}