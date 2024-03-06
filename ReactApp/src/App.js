import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ListBusesComponent from './components/ListBusesComponent';
import BusForm from './components/BusForm';
import Home from "./components/Home";
import ReservationList from "./components/ReservationList";
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element ={<Home /> }> </Route>
                <Route path='/buses' element ={<ListBusesComponent /> }> </Route>
                <Route path='/buses/add-bus' element ={<BusForm /> }> </Route>
                <Route path='/edit-bus/:id' element={<BusForm/>}> </Route>
                <Route path='/reservations' element={<ReservationList/>}> </Route>

            </Routes>
        </Router>
    );
}

export default App;
