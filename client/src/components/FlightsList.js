import React, { useContext, useEffect } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import { FLIGHTS_ROUTE } from '../utils/consts';
import {Context} from '../index';
import { observer } from 'mobx-react-lite';
import FlightItem from './FlightItem';
import {getFlights,getPilots,getAirplanes,getAirports,getCrews,getDeparturePoints,getPlaceOfDestinations} from '../http/flightsAPI';

const FlightsList = observer(()=>{
    const {flight} = useContext(Context);
    useEffect(()=>{

        getPilots().then(data => flight.setPilots(data));

        getAirplanes().then(data => flight.setAirplanes(data));

        getAirports().then(data=> flight.setAirports(data));

        getCrews().then(data => flight.setCrews(data));

        getDeparturePoints().then(data => flight.setDeparturePoints(data));

        getPlaceOfDestinations().then(data=> flight.setPlaceOfDestinations(data));

        getFlights().then(data => flight.setFlights(data));


    }, []);

    return (
        <div>    
            {flight.Flights.map(Flight=>    
                <FlightItem key={Flight.id} Flight ={Flight} flight ={flight} />   
            )}                   
        </div>    
    );
});

export default FlightsList;