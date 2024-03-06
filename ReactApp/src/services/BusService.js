import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/buses';
export const listBuses= ()=> axios.get(REST_API_BASE_URL);

export const createBus = (bus)=>axios.post(REST_API_BASE_URL,bus);

export const getBus= (id)=>axios.get(REST_API_BASE_URL+'/'+id);

export const editBus=(id,bus)=>axios.put(REST_API_BASE_URL+'/'+id,bus);

export const deleteBus=(id)=>axios.delete(REST_API_BASE_URL+'/'+id);