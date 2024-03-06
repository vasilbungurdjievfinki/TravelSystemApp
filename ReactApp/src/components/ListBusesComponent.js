import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { deleteBus } from "../services/BusService";
import './busListStyle.css';
import ReservationForm from "./ReservationForm";

function List() {
    const navigator = useNavigate();
    const [buses, setBuses] = useState([]);
    const [showReservationForm, setShowReservationForm] = useState(false);
    const [selectedBusId, setSelectedBusId] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        getAllBuses();
    }, [startDate, endDate]); // Re-fetch buses when startDate or endDate changes

    function getAllBuses() {
        let url = "http://localhost:8080/api/buses";
        if (startDate && endDate) {
            url += `?startDate=${startDate}&endDate=${endDate}`;
            console.log(url);
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setBuses(data.filter(bus => bus.freeSeats > 0));
            })
            .catch(error => console.error('Error fetching buses:', error));
    }

    function formatDate(dateTimeString) {
        const date = new Date(dateTimeString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    function updateBus(id) {
        navigator(`/edit-bus/${id}`);
    }

    function removeBus(id) {
        deleteBus(id)
            .then(response => {
                getAllBuses();
            })
            .catch(error => {
                console.error(error);
            });
    }
    function refreshBuses() {
        getAllBuses();
    }

    const handleOrderTickets = (busId) => {
        setShowReservationForm(true);
        setSelectedBusId(busId);
    };



    const handleSortByDate = () => {
        const sortedBuses = [...buses].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        setBuses(sortedBuses);
    };
    const handleSortByPrice = () => {
        const sortedBuses = [...buses].sort((a, b) => a.price - b.price);
        setBuses(sortedBuses);
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
            <h1 className="list-buses">List of Buses</h1>
            {showReservationForm && (
                <ReservationForm
                    busId={selectedBusId}
                    onClose={() => setShowReservationForm(false)}
                    refreshBuses={refreshBuses}
                />
            )}
            <div className="filter-sort">
                <label>Filter by Date:</label>
                <input type="date" onChange={(e) => setStartDate(e.target.value)} />
                <input type="date" onChange={(e) => setEndDate(e.target.value)} />
                <button onClick={handleSortByDate}>Sort by Date</button>
                <button onClick={handleSortByPrice}>Sort by Price</button>

            </div>
            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Date Time</th>
                    <th>Free Seats</th>
                    <th>City From</th>
                    <th>City To</th>
                    <th>Address</th>
                    <th>Price</th>
                    <th>Actions</th>
                    <th>Buy</th>
                </tr>
                </thead>
                <tbody>
                {buses.map(bus => (
                    <tr key={bus.id}>
                        <td>{bus.id}</td>
                        <td>{formatDate(bus.dateTime)}</td>
                        <td>{bus.freeSeats}</td>
                        <td>{bus.cityFrom}</td>
                        <td>{bus.cityTo}</td>
                        <td>{bus.address}</td>
                        <td>{bus.price}</td>
                        <td>
                            <button className="update-bus" onClick={() => updateBus(bus.id)}>Update</button>
                            <button className="remove-bus" onClick={() => removeBus(bus.id)}>Delete</button>
                        </td>
                        <td>
                            <button className="buy-bus" onClick={() => handleOrderTickets(bus.id)}>Order Tickets</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button className="add-bus-button" onClick={() => navigator('add-bus')}>Add Bus</button>
        </div>
    );
}

export default List;
