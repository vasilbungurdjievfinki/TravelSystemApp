package com.example.travelsystem.repository;

import com.example.travelsystem.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public interface BusRepository extends JpaRepository<Bus, Long> {
    List<Bus> findByDateTimeBetween(Date dateTime, Date dateTime2);
    // You can add custom query methods if needed
}