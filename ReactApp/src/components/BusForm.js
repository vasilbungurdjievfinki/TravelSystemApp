import React, {useEffect, useState} from 'react';
import {createBus, getBus,editBus} from "../services/BusService";
import {useNavigate,useParams} from "react-router-dom";
import './busFormStyle.css'
function BusForm({ onClose, onBusAdded }) {
    const [dateTime,setDateTime] = useState('');
    const [price,setPrice] = useState('');
    const [freeSeats,setFreeSeats] = useState('');
    const [cityFrom,setCityFrom] = useState('');
    const [cityTo,setCityTo] = useState('');

    const [address,setAddress] = useState('');
const navigator=useNavigate();
const {id}=useParams();

useEffect(()=>{
if(id)
{
    getBus(id).then((response)=>{
        setDateTime(response.data.dateTime);
        setPrice(response.data.price);
        setFreeSeats(response.data.freeSeats);
        setCityFrom(response.data.cityFrom);
        setCityTo(response.data.cityTo);
        setAddress(response.data.address);
    }).catch(error=>{
        console.error(error);
    })
}


},[id])

   function saveBus(e)
   {
       e.preventDefault();
       // Check if any field is blank
       if (!dateTime || !price || !freeSeats || !cityFrom || !cityTo || !address) {
           alert('All fields are required!');
           return;
       }

       // Check if date time is valid (not earlier than current date or later than 1 year)
       const currentDate = new Date();
       const selectedDateTime = new Date(dateTime);

       if (selectedDateTime < currentDate) {
           alert('Date time cannot be earlier than the current date!');
           return;
       }

       const oneYearLater = new Date();
       oneYearLater.setFullYear(currentDate.getFullYear() + 1);
       if (selectedDateTime > oneYearLater) {
           alert('Date time cannot be later than one year from now!');
           return;
       }

       const bus={dateTime,price,freeSeats,cityFrom,cityTo,address}
       console.log("BUS OBJECT CREATED");
       console.log(bus);
       if(id)
       {
           editBus(id,bus).then((response)=>{
               console.log(response.data);
               navigator('/buses');
           }).catch(error=>{
               console.error(error);
           })
       }
       else{
           createBus(bus).then((response)=>{
               console.log(response.data);
               navigator('/buses');
           }).catch(error=>{
               console.error(error);
           })
       }
   }

    function handleDateTime(e) {
        const selectedDateTime = new Date(e.target.value);
        const currentDate = new Date();

        // Set the value only if it's not earlier than the current date
        if (selectedDateTime >= currentDate) {
            setDateTime(e.target.value);
        } else {
            alert('Date time cannot be earlier than the current date!');
            // You may choose to clear the input field here or handle it differently
        }
    }


    function handlePrice(e) {
        setPrice(e.target.value);
    }

    function handleFreeSeats(e) {
        setFreeSeats(e.target.value);
    }

    function handleCityFrom(e) {
        setCityFrom(e.target.value)
    }

    function handleCityTo(e) {
        setCityTo(e.target.value)
    }

    function handleAddress(e) {
        setAddress(e.target.value)
    }
    function  pageTitle()
    {
        if(id)
        {
            return <h2>Update Bus</h2>
        }
        else return <h2>Add Bus</h2>

    }

    function closeForm() {
        navigator('/buses');
    }

    return (
        <div>
            {pageTitle()}
            <form>
                <label className="labels">Date Time:</label>
                <input className="inputs" type="datetime-local" name="dateTime" value={dateTime} onChange={handleDateTime} />
                <br/>

                <label className="labels">Price:</label>
                <input className="inputs" type="number" name="price" value={price} onChange={handlePrice} />
                <br/>
                <label className="labels">Free Seats:</label>
                <input className="inputs" type="number" name="freeSeats" value={freeSeats} onChange={handleFreeSeats}/>
                <br/>
                <label className="labels">City From:</label>
                <input  className="inputs" type="text" name="cityFrom" value={cityFrom} onChange={handleCityFrom} />
                <br/>

                <label className="labels">City To:</label>
                <input className="inputs" type="text" name="cityTo" value={cityTo} onChange={handleCityTo}  />
                <br/>

                <label className="labels">Address:</label>
                <input className="inputs" type="text" name="address" value={address} onChange={handleAddress}  />
                <br/>
                <button className="submit-button" type="submit"  onClick={saveBus}>Add</button>
                <button className="cancel-button" type="button" onClick={closeForm}>Cancel</button>
            </form>
        </div>
    );
}

export default BusForm;
