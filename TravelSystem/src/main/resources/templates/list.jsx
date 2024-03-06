import React, { useState, useEffect } from 'react';

function List() {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        fetch('/api/buses') // Fetch buses data from your backend API
            .then(response => response.json())
            .then(data => setBuses(data))
            .catch(error => console.error('Error fetching buses:', error));
    }, []);

    return (
        <div>
            <h1>List of Buses</h1>
            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Date Time</th>
                    <th>Total Seats</th>
                    <th>Free Seats</th>
                    <th>City From</th>
                    <th>City To</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {buses.map(bus => (
                    <tr key={bus.id}>
                        <td>{bus.id}</td>
                        <td>{bus.dateTime}</td>
                        <td>{bus.totalSeats}</td>
                        <td>{bus.freeSeats}</td>
                        <td>{bus.cityFrom}</td>
                        <td>{bus.cityTo}</td>
                        <td>{bus.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;
