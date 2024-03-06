package com.example.travelsystem.service;

import com.example.travelsystem.model.Bus;
import net.bytebuddy.asm.Advice;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public interface BusService {
    Bus getBusById(Long id);
    List<Bus> getAllBuses();
    Bus createBus(Bus bus);
    Bus updateBus(Long id, Bus bus) throws Exception;
    Bus deleteBus(Long id);
    boolean reserveSeat(Long busId, int seatNumber);
    boolean cancelSeatReservation(Long busId, int seatNumber);

    List<Bus> getBusesByDateRange(Date startDate, Date endDate);
    Bus decreaseFreeSeats(Long id,int seats);
}