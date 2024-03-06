package com.example.travelsystem.repository;

import com.example.travelsystem.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    // You can add custom query methods if needed
}