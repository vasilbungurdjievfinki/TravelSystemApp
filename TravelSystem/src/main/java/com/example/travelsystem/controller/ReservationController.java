package com.example.travelsystem.controller;

import com.example.travelsystem.model.Bus;
import com.example.travelsystem.model.Reservation;
import com.example.travelsystem.service.ReservationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }


    @GetMapping
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }
    @PostMapping
    public Reservation addReservation(@RequestBody Reservation reservation) {
        System.out.println("adding reservation right now");
        return reservationService.createReservation(reservation);
    }
    @GetMapping("{id}")
    public Reservation getReservationById(@PathVariable("id") Long reservationId){
        return reservationService.getReservationById(reservationId);
    }
    @PutMapping("{id}")
    public Reservation editReservation(@PathVariable("id") Long reservationId,@RequestBody Reservation reservation) throws Exception {
        return reservationService.updateReservation(reservationId,reservation);
    }
    @DeleteMapping("{id}")
    public Reservation deleteReservation(@PathVariable("id") Long reservationId){
        return reservationService.deleteReservation(reservationId);
    }
}