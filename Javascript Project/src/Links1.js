import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Stays from "./Stays";
import Flights from './Flights';
import Flighthotel from './Flighthotel';
import Carrental from './Carrental';
import Attractions from './Attractions';
import Aiporttaxis from './Aiporttaxis';

function Links1() {
  return (
    <div>
        {/* <Link to="/Stays"> 🛌Stays</Link>
        <Link to="/Flights">Flights</Link>
        <Link to="/Flighthotel">FLight + Hotel</Link>
        <Link to="/Carrental">Car rentals</Link>
        <Link to="/Airporttaxis">Airport Taxis</Link>
        <Link to="/Aiporttaxis">Airporttaxis</Link> */}
      <Routes>
        <Route path='/' element={<Stays/>}>Stays</Route>
        <Route path='Flights' element={<Flights/>}>Flights</Route>
        <Route path='Flighthotel' element={<Flighthotel/>}>Flighthotel</Route>
        <Route path='Carrental' element={<Carrental/>}>Car Rental</Route>
        <Route path='Attractions' element={<Attractions/>}>Attractions</Route> 
        <Route path='Airporttaxis' element={<Aiporttaxis/>}>Airporttaxis</Route>
      </Routes>
    </div>
  )
}

export default Links1;
