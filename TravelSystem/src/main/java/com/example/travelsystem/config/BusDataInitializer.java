package com.example.travelsystem.config;

import com.example.travelsystem.model.Bus;
import com.example.travelsystem.model.Reservation;
import com.example.travelsystem.model.Role;
import com.example.travelsystem.model.User;
import com.example.travelsystem.service.BusService;
import com.example.travelsystem.service.ReservationService;
import com.example.travelsystem.service.UserService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Component
public class BusDataInitializer {

    @Autowired
    private BusService busService;
    @Autowired
    private ReservationService reservationService;

    @PostConstruct
    public void init() {
        // Initialize some sample data for buses
        // Create 10 instances of Bus
        Bus bus1 = new Bus();
        bus1.setDateTime(new Date(124,3,1,11,30,0));
        bus1.setPrice(500);
        bus1.setFreeSeats(4); // Initially, all seats are free
        bus1.setCityFrom("Skopje");
        bus1.setCityTo("Shtip");
        bus1.setAddress("Bul. Ilinden br.10");

        Bus bus2 = new Bus();
        bus2.setDateTime(new Date(124,3,1,14,0,0));
        bus2.setPrice(400);
        bus2.setFreeSeats(5); // Initially, all seats are free
        bus2.setCityFrom("Skopje");
        bus2.setCityTo("Kriva Palanka");
        bus2.setAddress("bul. Partizanski Odredi br.10");

        Bus bus3 = new Bus();
        bus3.setDateTime(new Date(124,3,22,8,45,0));
        bus3.setPrice(600);
        bus3.setFreeSeats(10); // Initially, all seats are free
        bus3.setCityFrom("Strumica");
        bus3.setCityTo("Skopje");
        bus3.setAddress("bul. Goce Delcev br.8");

        Bus bus4 = new Bus();
        bus4.setDateTime(new Date(124,2,27,4,30,0));
        bus4.setPrice(250);
        bus4.setFreeSeats(40); // Initially, all seats are free
        bus4.setCityFrom("Kocani");
        bus4.setCityTo("Vinica");
        bus4.setAddress("ul. Makedonija br.100");

        Bus bus5 = new Bus();
        bus5.setDateTime(new Date(124,2,27,4,0,0));
        bus5.setPrice(250);
        bus5.setFreeSeats(30); // Initially, all seats are free
        bus5.setCityFrom("Vinica");
        bus5.setCityTo("Kocani");
        bus5.setAddress("ul. Pitu Guli br.1");

        Bus bus6 = new Bus();
        bus6.setDateTime(new Date(124,4,6,6,0,0));
        bus6.setPrice(300);
        bus6.setFreeSeats(10); // Initially, all seats are free
        bus6.setCityFrom("Ohrid");
        bus6.setCityTo("Struga");
        bus6.setAddress("ul. Koco Racin br.50");

        Bus bus7 = new Bus();
        bus7.setDateTime(new Date(124,4,6,23,0,0));
        bus7.setPrice(400);
        bus7.setFreeSeats(1); // Initially, all seats are free
        bus7.setCityFrom("Kicevo");
        bus7.setCityTo("Ohrid");
        bus7.setAddress("bul. Jane Sandanski br.140");

        Bus bus8 = new Bus();
        bus8.setDateTime(new Date(124,2,16,8,30,0));
        bus8.setPrice(900);
        bus8.setFreeSeats(48); // Initially, all seats are free
        bus8.setCityFrom("Kumanovo");
        bus8.setCityTo("Gevgelija");
        bus8.setAddress("ul. Goce Delcev br.100");

        Bus bus9 = new Bus();
        bus9.setDateTime(new Date(124,2,31,9,0,0));
        bus9.setPrice(550);
        bus9.setFreeSeats(4); // Initially, all seats are free
        bus9.setCityFrom("Berovo");
        bus9.setCityTo("Gostivar");
        bus9.setAddress("bul. Osloboduvanje br.55");

        Bus bus10 = new Bus();
        bus10.setDateTime(new Date(124,4,1,10,0,0));
        bus10.setPrice(450);
        bus10.setFreeSeats(20); // Initially, all seats are free
        bus10.setCityFrom("Strumica");
        bus10.setCityTo("Gevgelija");
        bus10.setAddress("ul. Koco Racin br.30");

        Reservation r1=new Reservation();
        r1.setBus(bus1);
        r1.setReservationDate(LocalDateTime.of(2024, 1, 17, 13, 33));
        r1.setName("Petar Trajkov");
        r1.setPrice(100);
        Reservation r2=new Reservation();
        r2.setBus(bus2);
        r2.setReservationDate(LocalDateTime.of(2024, 1, 18, 15, 34));
        r2.setName("Trajko Mihajlov");
        r2.setPrice(200);
        Reservation r3=new Reservation();
        r3.setBus(bus3);
        r3.setReservationDate(LocalDateTime.of(2024, 1, 24, 0, 11));
        r3.setName("Mihail Popov");
        r3.setPrice(50);

        busService.createBus(bus1);
        busService.createBus(bus2);
        busService.createBus(bus3);
        busService.createBus(bus4);
        busService.createBus(bus5);
        busService.createBus(bus6);
        busService.createBus(bus7);
        busService.createBus(bus8);
        busService.createBus(bus9);
        busService.createBus(bus10);

        reservationService.createReservation(r1);
        reservationService.createReservation(r2);
        reservationService.createReservation(r3);



        System.out.println("Sample buses initialized.");

    }
}
