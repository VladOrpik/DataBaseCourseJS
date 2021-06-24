import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../index';
import "./Flight.css";
import {getOneFlight} from '../http/flightsAPI';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const Flight = observer(()=>{
      const[currentFlight, setCurrentFlight] = useState({});
      const flightInfo = 
      {
        departureDate: "2021-07-28T06:18:45.063Z",
        arrivalDate: "2021-07-28T23:48:47.204Z",
        departureTime: "17:10:26",
        arrivalTime: "21:23:19",
        id: 4,
        placeOfDestinationId: 1,
        departurePointId: 3,
        airplaneId: 7,
        airplane: {
            "id": 7,
            "placeAmount": 120,
            "planeModel": "boeing 800",
            "crewId": 1
        }
    };
          const {flight} = useContext(Context);
          const {id} = useParams();
          

          useEffect(()=>{
            getOneFlight(id).then(data=>setCurrentFlight(data));
            console.log(currentFlight);
          },[]);
          
          
          
    return(
        <div className="flightInfo">
           <div>Flight ID: {flight.Flight.id}</div>
           {/* <div>Plane Model:{flight.Flight.airplane.planeModel}</div> */}
           <div>Flight plane:{flight.Flight.airplaneId }</div>
           

           <div className="departurePoint">
                From: {flight.DeparturePoints.map(departure=>
                      departure.id == flight.Flight.departurePointId ?
                      <div key={departure.id}>
                        {departure.airport.airportName} <br/> ({departure.airport.airportCountry})
                      </div>
                        :
                        null
                            )}
            </div>  
           <div className="placeOfDestination">
                To: {flight.PlaceOfDestinations.map(destination=>
            
                destination.id == flight.Flight.placeOfDestinationId ?
                    <div key={destination.id}>
                        {destination.airport.airportName} <br/> ({destination.airport.airportCountry})
                    </div>
                :
                    null
                )}
            </div>    
           <div className="airplaneInfo">
             Plane: {flightInfo.airplane.planeModel}
             <div className="placeAmount">PlaceAmount: {flightInfo.airplane.placeAmount} </div>
             <div className="seats"> Seats: <br/>
               {flight.Airplanes.map((airplane) =>
                 airplane.id == flightInfo.airplaneId ?
                  airplane.seats.map(seat=>
                    <div className="seat">{seat.seatNumber}</div>
                  )
                 :
                 null
               )}
             </div>
           </div>
        </div> 

           


    )
})

export default Flight;