package com.example.travelsystem.controller;


import com.example.travelsystem.model.Bus;
import com.example.travelsystem.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/buses")
public class BusController {

    private final BusService busService;

    @Autowired
    public BusController(BusService busService) {
        this.busService = busService;
    }


    @GetMapping
    public List<Bus> getAllBuses(
            @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
            @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {

        if (startDate != null && endDate != null) {
            return busService.getBusesByDateRange(startDate,endDate);
        } else {
            return busService.getAllBuses();
        }
    }


    @PostMapping
    public Bus addBus(@RequestBody Bus bus) {
        System.out.println("adding bus right now");
        return busService.createBus(bus);
    }

    @GetMapping("{id}")
    public Bus getBusById(@PathVariable("id") Long busId){
        return busService.getBusById(busId);
    }
    @PutMapping("{id}")
    public Bus editBus(@PathVariable("id") Long busId,@RequestBody Bus bus) throws Exception {
        return busService.updateBus(busId,bus);
    }
    @DeleteMapping("{id}")
    public Bus deleteBus(@PathVariable("id") Long busId){
        return busService.deleteBus(busId);
    }
    @PatchMapping("/{id}/decrease-seats")
    public Bus decreaseFreeSeats(@PathVariable("id") Long busId, @RequestParam("seats") int seatsToDecrease) {
        System.out.println(busId+" "+seatsToDecrease);
            return busService.decreaseFreeSeats(busId,seatsToDecrease);
        }
    }

