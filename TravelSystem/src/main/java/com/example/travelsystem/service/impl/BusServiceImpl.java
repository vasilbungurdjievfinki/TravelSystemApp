package com.example.travelsystem.service.impl;

import com.example.travelsystem.model.Bus;
import com.example.travelsystem.repository.BusRepository;
import com.example.travelsystem.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BusServiceImpl implements BusService {

    @Autowired
    private final BusRepository busRepository;

    public BusServiceImpl(BusRepository busRepository) {
        this.busRepository = busRepository;
    }

    @Override
    public Bus getBusById(Long id) {
        Optional<Bus> busOptional = busRepository.findById(id);
        return busOptional.orElse(null);
    }

    @Override
    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }

    @Override
    public Bus createBus(Bus bus) {
        return busRepository.save(bus);
    }

    @Override
    public Bus updateBus(Long id, Bus bus) throws Exception {
        Bus temp = busRepository.findById(id).orElseThrow(Exception::new);
        temp.setDateTime(bus.getDateTime());
        temp.setAddress(bus.getAddress());
        temp.setFreeSeats(bus.getFreeSeats());
        temp.setPrice(bus.getPrice());
        temp.setCityFrom(bus.getCityFrom());
        temp.setCityTo(bus.getCityTo());
        return busRepository.save(temp);
    }

    @Override
    public Bus deleteBus(Long id) {

        Bus bus = busRepository.findById(id).orElse(null);
        busRepository.deleteById(id);
        return bus;

    }

    @Override
    public boolean reserveSeat(Long busId,int a) {
        Bus bus = busRepository.findById(busId).orElse(null);
        if (bus == null) {
            return false;
        }
        if (bus.getFreeSeats() <= 0) {
            return false; // No available seats
        }
        // Assuming the seat is successfully reserved
        bus.setFreeSeats(bus.getFreeSeats() - a);
        busRepository.save(bus);
        return true;
    }

    @Override
    public boolean cancelSeatReservation(Long busId,int a) {
        Bus bus = busRepository.findById(busId).orElse(null);
        if (bus == null) {
            return false;
        }
        // Assuming the seat reservation is successfully canceled
        bus.setFreeSeats(bus.getFreeSeats() + a);
        busRepository.save(bus);
        return true;
    }

    @Override
    public List<Bus> getBusesByDateRange(Date startDate, Date endDate) {
        return busRepository.findByDateTimeBetween(startDate, endDate);
    }
    public Bus decreaseFreeSeats(Long id,int seats){
        Bus b=busRepository.findById(id).orElse(null);
        b.setFreeSeats(b.getFreeSeats()-seats);
        System.out.println(b);
        return busRepository.save(b);
    }
}