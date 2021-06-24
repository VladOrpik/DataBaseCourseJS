import React from 'react';
import { useHistory } from 'react-router';
import { FLIGHT_ROUTE } from '../utils/consts';

import './FlightItem.css';
const FlightItem =({Flight, flight})=>{
    const history = useHistory();
    const click = ()=>{
        history.push(FLIGHT_ROUTE + '/' + Flight.id);
    };
    
    return(
        <div className="flight">
            <button onClick={click} > Подробнее</button>
            <div className="departureDate">
                Departure date: <br/> {Flight.departureDate}
            </div>

            <div className="arrivalDate">
                Arrival date: <br/> {Flight.arrivalDate}
            </div>

            <div className="departureTime">
                Departure time: <br/> {Flight.departureTime}
            </div>

            <div className="arrivalTime">
                Arrival time: <br/> {Flight.arrivalTime} 
            </div>

            <div className="placeOfDestination">
                To: <br/> {flight.PlaceOfDestinations.map(destination=>
            
                destination.id == Flight.placeOfDestinationId ?
                    <div key={destination.id}>
                        {destination.airport.airportName} <br/> ({destination.airport.airportCountry})
                    </div>
                :
                    null
                )}
            </div>

            <div className="departurePoint">
                From: <br/> {flight.DeparturePoints.map(departure=>
                                departure.id == Flight.departurePointId ?
                                <div key={departure.id}>
                                {departure.airport.airportName} <br/> ({departure.airport.airportCountry})
                            </div>
                            :
                            null
                            )}
            </div>
            
        </div>  
    )

};

export default FlightItem;