import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReservationList.css';
import {Link} from "react-router-dom"; // Import your CSS file

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        // Fetch reservations from the API
        axios.get('http://localhost:8080/api/reservations')
            .then(response => {
                // Format dates before setting reservations
                const formattedReservations = response.data.map(reservation => ({
                    ...reservation,
                    // Format dateTime
                    bus: {
                        ...reservation.bus,
                        dateTime: formatDateTime(reservation.bus.dateTime)
                    },
                    // Format reservationDate
                    reservationDate: formatDate(reservation.reservationDate)
                }));

                setReservations(formattedReservations);
            })
            .catch(error => {
                console.error('Error fetching reservations:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once

    // Function to format dateTime
    const formatDateTime = dateTime => {
        const date = new Date(dateTime);
        const formattedDate = `${padWithZero(date.getDate())}.${padWithZero(date.getMonth() + 1)}.${date.getFullYear()}`;
        const formattedTime = `${padWithZero(date.getHours())}:${padWithZero(date.getMinutes())}`;
        return `${formattedDate} ${formattedTime}`;
    };

    // Function to format reservationDate
    const formatDate = dateTime => {
        const date = new Date(dateTime);
        const formattedDate = `${padWithZero(date.getDate())}.${padWithZero(date.getMonth() + 1)}.${date.getFullYear()}`;
        const formattedTime = `${padWithZero(date.getHours())}:${padWithZero(date.getMinutes())}`;
        return `${formattedDate} ${formattedTime}`;
    };

    // Helper function to pad number with zero if necessary
    const padWithZero = number => {
        return number.toString().padStart(2, '0');
    };

    return (
        <div>
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <span className="mk">MK</span><span className="transport">Transport</span>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/buses">List of Buses</Link></li>
                        <li><Link to="/reservations">My Reservations</Link></li>
                    </ul>
                </nav>
            </header>
        <div className="reservation-container">
            <h1 className="header-text">Reservations</h1>
            <div className="reservation-list">
                {reservations.map(reservation => (
                    <div key={reservation.id} className="reservation-card">
                        <div className="row">
                            <strong>Name:</strong> {reservation.name}
                        </div>
                        <div className="row">
                            <strong>Price:</strong> {reservation.price}
                        </div>
                        <div className="row">
                            <strong>Date:</strong> {reservation.bus.dateTime}
                        </div>
                        <div className="row">
                            <strong>From:</strong> {reservation.bus.cityFrom}
                        </div>
                        <div className="row">
                            <strong>To:</strong> {reservation.bus.cityTo}
                        </div>
                        <div className="row">
                            <strong>Ticket Bought on:</strong> {reservation.reservationDate}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default ReservationList;
