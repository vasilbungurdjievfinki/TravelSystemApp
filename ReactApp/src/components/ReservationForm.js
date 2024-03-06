import React, { useState, useEffect } from 'react';
import { createReservation } from '../services/ReservationService';
import { getBus } from '../services/BusService';
import {useNavigate} from "react-router-dom";
import axios from "axios";


function ReservationForm({ busId, onClose }) {
    const [name, setName] = useState('');
    const [seatNum, setSeatNum] = useState(1);
    const [dateTime, setDateTime] = useState('');
    const [bus, setBus] = useState(null); // State to store the bus object
    const navigator=useNavigate();

    useEffect(() => {
        getBus(busId)
            .then((response) => {
                setBus(response.data); // Set the bus object from the response
            })
            .catch((error) => {
                console.error(error);
            });
    }, [busId]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSeatsChange = (event) => {
        setSeatNum(parseInt(event.target.value));
    };

    const handleDateTimeChange = (event) => {
        setDateTime(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const currentDateTime = new Date();
        const totalPrice = seatNum * bus.price;

        const reservation = {
            name,
            price: totalPrice,
            bus,
            seatNum,
            reservationDate: currentDateTime.toISOString(),
        };

        console.log(reservation);

        // Make a request to decrease the free seats on the bus
        axios.patch(`http://localhost:8080/api/buses/${busId}/decrease-seats?seats=${seatNum}`)
            .then((response) => {
                console.log(response.data); // Log the response from the server
                // If the request is successful, create the reservation
                createReservation(reservation)
                    .then((response) => {
                        console.log(response.data);
                        onClose();
                        navigator('/reservations');

                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    if (!bus) return null; // Render nothing until bus data is fetched

    return (
        <div className="reservation-form">
            <h2 style={{ fontFamily: 'Segoe UI', fontSize: '30px', color: 'black', fontWeight: 'lighter', marginLeft: '6px', marginTop: '13px' }}>Reservation Form</h2>

            <label htmlFor="names">Name:</label>
            <input
                type="text"
                id="names"
                name="names"
                value={name}
                onChange={handleNameChange}
            />
            <br/>
            <label htmlFor="seats">Number of Seats:</label>
            <input
                type="number"
                id="seats"
                name="seats"
                value={seatNum}
                min="1"
                max={bus.freeSeats}
                onChange={handleSeatsChange}
            />
            <br/>


            <button style={{ margin: '10px', backgroundColor: 'green', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', fontWeight:'bold'}} onClick={handleSubmit}>Reserve Seats</button>
            <button style={{ backgroundColor: 'maroon', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', fontWeight:'bold' }} onClick={onClose}>Cancel</button>

        </div>
    );
}

export default ReservationForm;
