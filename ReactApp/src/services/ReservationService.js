import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/reservations';

export const createReservation = (reservation)=>axios.post(REST_API_BASE_URL,reservation);


