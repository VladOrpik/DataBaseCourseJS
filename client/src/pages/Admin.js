import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import {createPilot,getPilots,deletePilot,changePilot,
      createAirplane,getAirplanes,deleteAirplane,changeAirplane,
        createAirport,getAirports,deleteAirport,changeAirport,
          createCrew,getCrews, getDeparturePoints,
           getPlaceOfDestinations,
            createFlight, getFlights, deleteFlight, changeFlight} from '../http/flightsAPI';
import { Context } from '..';
import './Admin.css';
import './AdminModal.js';
import './AdminSearch.js';
import { useHistory } from 'react-router';
import { ADMIN_ROUTE } from '../utils/consts';

const Admin = observer(()=>{
    const {flight} = useContext(Context);
    const {user} = useContext(Context);
    // PILOT

    
    const [pilotId, setPilotId] = useState('');
    const [pilotName, setPilotName] = useState(undefined);
    const [pilotSurname, setPilotSurname] = useState(undefined);
    const [workExperience, setWorkExperience] = useState(undefined);
    const [education, setEducation] = useState(undefined);
    const [crewId, setCrewId] = useState(undefined);
    const [pilotParametr, setPilotParametr] = useState(undefined);

    // AIRPLANE
    const [airplaneId, setAirplaneId] = useState(undefined);
    const [placeAmount, setPlaceAmount] = useState(undefined);
    const [planeModel, setPlaneModel] = useState(undefined);
    const [airplaneParametr, setAirplaneParametr] = useState(undefined);

    // AIRPORT
    const [airportId, setAirportId] = useState(undefined);
    const [airportName, setAirportName] = useState(undefined);
    const [airportCountry, setAirportCountry] = useState(undefined);
    const [airportAddress, setAirportAddress] = useState(undefined);
    const [airportParametr, setAirportParametr] = useState(undefined);

    // FLIGHT
    const [flightId, setFlightId] = useState(undefined);
    const [departureDate, setDepartureDate] = useState(undefined);
    const [arrivalDate, setArrivalDate] = useState(undefined);
    const [departureTime, setDepartureTime] = useState(undefined);
    const [arrivalTime, setArrivalTime] = useState(undefined);
    const [departurePointId, setDeparturePoint] = useState(undefined);
    const [placeOfDestinationId, setPlaceOfDestination] = useState(undefined);
    const [flightParametr, setFlightParametr] = useState(undefined);
    const [flightDateParametr, setFlightDateParametr] = useState(undefined);
    





    const click = async (e)=> {
        if(e.target.className == "addPilotButton"){
            try{
                let data;
                    // console.log(pilotName, pilotSurname, workExperience, education, crewId);

                    data = await createPilot(pilotName, pilotSurname, workExperience, education, crewId);

                    getPilots().then(data => flight.setPilots(data));

                    // flight.setPilots(data);
            }catch(e){
                // alert(e.response.data.message);
            }  
        }else if(e.target.className == "addAirplaneButton"){
            try{
                let data;
                    data = await createAirplane(placeAmount, planeModel, crewId);

                    getAirplanes().then(data => flight.setAirplanes(data));

                    // flight.setAirplanes(data);
            }catch(e){
                alert(e.response.data.message);
            } 
        }else if(e.target.className == "addAirportButton"){
            try{
                let data;

                    data = await createAirport(airportName, airportCountry, airportAddress);

                    getAirports().then(data=> flight.setAirports(data));

                    // flight.setAirports(data);

            }catch(e){
                alert(e.response.data.message);
            } 
        }else if(e.target.className == "addCrewButton"){
            try{
                let data;

                    data = await createCrew(airportName, airportCountry, airportAddress);

                    getCrews().then(data => flight.setCrews(data));


            }catch(e){
                alert(e.response.data.message);
            } 
        }else if(e.target.className == "addFlightButton"){
            try{
                let data;
                console.log(departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId);

                    data = await createFlight(departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId);

                    getFlights().then(data => flight.setFlights(data));


            }catch(e){
                alert(e.response.data.message);
            }
        }else if(e.target.className == "deletePilotButton"){
            const confirming = window.confirm("Вы уверены, что хотите удалить данного пилота?");
            if(confirming){
                await deletePilot(e.target.id);
                getPilots().then(data => flight.setPilots(data));
            }else{
                return
            }
                
                
                
        }else if(e.target.className == "deleteAirportButton"){
            const confirming = window.confirm("Вы уверены, что хотите удалить данный аэропорт?");
            if(confirming){
                await deleteAirport(e.target.id);
                getAirports().then(data=> flight.setAirports(data));  
            }else{
                return
            }
            
            
        }else if(e.target.className == "deleteAirplaneButton"){
            const confirming = window.confirm("Вы уверены, что хотите удалить данный самолет?");
            if(confirming){
                await deleteAirplane(e.target.id);
                getAirplanes().then(data => flight.setAirplanes(data));  
            }else{
                return
            }
            
            
        }else if(e.target.className == "deleteFlightButton"){
            const confirming = window.confirm("Вы уверены, что хотите удалить данный рейс?");
            if(confirming){
               await deleteFlight(e.target.id);
                getFlights().then(data => flight.setFlights(data)); 
            }else{
                return
            }
            
            
        }else if(e.target.className == "changePilotButton"){
            const confirming = window.confirm("Вы уверены, что хотите внести изменения?");
            if(confirming){
               await changePilot(pilotId, pilotName, pilotSurname, workExperience, education, crewId);
               getPilots().then(data => flight.setPilots(data));
            }else{
                return
            }
            
            
        }else if(e.target.className == "changeAirplaneButton"){
            const confirming = window.confirm("Вы уверены, что хотите внести изменения?");
            if(confirming){
               await changeAirplane(airplaneId, planeModel, crewId);
               getAirplanes().then(data => flight.setAirplanes(data));
            }else{
                return
            }
            
            
        }else if(e.target.className == "changeAirportButton"){
            const confirming = window.confirm("Вы уверены, что хотите внести изменения?");
            if(confirming){
               await changeAirport(airportId,airportName, airportCountry, airportAddress);
               getAirports().then(data=> flight.setAirports(data));
            }else{
                return
            }
            
            
        }else if(e.target.className == "changeFlightButton"){
            const confirming = window.confirm("Вы уверены, что хотите внести изменения?");
            if(confirming){
               await changeFlight(flightId,departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId);
               getFlights().then(data => flight.setFlights(data));
            }else{
                return
            }
            
            
        }
        
        
    };

    const searchClick = async(e) =>{
        if(e.target.className == "SearchPilotButton"){
            getPilots("?parametr="+pilotParametr).then(data=> flight.setPilots(data));
        }else if(e.target.className == "SearchAirplaneButton"){
            getAirplanes("?parametr="+airplaneParametr).then(data=> flight.setAirplanes(data));
        }else if(e.target.className == "SearchAirportButton"){
            getAirports("?parametr="+airportParametr).then(data=> flight.setAirports(data));
        }else if(e.target.className == "SearchFlightButton"){
            getFlights("?parametr="+flightParametr).then(data => flight.setFlights(data));
        }else if(e.target.className == "SearchFlightDateButton"){
            getFlights("?parametr="+flightDateParametr).then(data => flight.setFlights(data));
        }else if(e.target.className == "showAllFlights"){
            getFlights().then(data => flight.setFlights(data));
        }
    }
    useEffect(()=>{

        getPilots().then(data => flight.setPilots(data));

        getAirplanes().then(data => flight.setAirplanes(data));

        getAirports().then(data=> flight.setAirports(data));

        getCrews().then(data => flight.setCrews(data));

        getDeparturePoints().then(data => flight.setDeparturePoints(data));

        getPlaceOfDestinations().then(data=> flight.setPlaceOfDestinations(data));

        getFlights().then(data => flight.setFlights(data));



    }, []);

    
    return(
        <div className="adminPanel">
            <div className="adminEmail">Admin email: {user._user.email}</div>
            <div className="createButtons">
                <button className="PilotButton"><span></span>Добавить пилота</button>
                <button className="AirplaneButton"><span></span>Добавить самолет</button>
                <button className="AirportButton"><span></span>Добавить аэропорт</button>
                <button className="CrewButton"><span></span>Добавить команду</button>  
                <button className="FlightButton"><span></span>Добавить рейс</button>  
            </div>
            <div className="checkButtons">
                <button className="PilotButton">Таблица пилотов</button>
                <button className="AirplaneButton">Таблица самолетов</button>
                <button className="AirportButton">Таблица аэропортов</button>
                <button className="CrewButton">Таблица команд</button>  
                <button className="FlightButton">Таблица рейсов</button>
            </div>
            
           

           
           
            <div className="pilotsTable hide">
                <div className="openSearchPilotButton">Поиск</div>
                <div className="searchPilotPanel hide">
                    <input className="searchPilot"  placeholder="Параметр поиска" value={pilotParametr} onChange={e=>setPilotParametr(e.target.value)}></input>
                    <button className="SearchPilotButton" onClick={searchClick}>Найти</button>
                    <button className="closeSearchButton">close</button>
                </div>



                <button className="closeTableButton">Close table</button>
                <div className="delete">
                        Удаление <br/>
                    {flight.Pilots.map(pilot=>
                        <div id ={pilot.id} className="deletePilotButton" onClick={click}>Удалить</div>
                        )} 
                    </div>
                    <div className="pilotsId">
                        Идентификатор <br/>
                    {flight.Pilots.map(pilot=>
                        <div className="tableCell">{pilot.id}</div>
                        )} 
                    </div>
                    
                    <div className="pilotsName">
                        Имя пилота <br/>
                    {flight.Pilots.map(pilot=>
                        <div className="tableCell">{pilot.pilotName}</div>
                        )} 
                    </div>
                    <div className="pilotsSurname">
                        Фамилия пилота <br/>
                    {flight.Pilots.map(pilot=>
                        <div className="tableCell"> {pilot.pilotSurname}</div>
                        )}  
                    </div>
                    <div className="pilotsWorkExperience">
                        Стаж пилота <br/>
                    {flight.Pilots.map(pilot=>
                        <div className="tableCell"> {pilot.workExperience}</div>
                        )}  
                    </div>
                    <div className="pilotsEducation">
                        Образование пилота <br/>
                    {flight.Pilots.map(pilot=>
                        <div className="tableCell"> {pilot.education}</div>
                        )}  
                    </div>
                    <div className="pilotsCrew">
                        Команда пилота <br/>
                    {flight.Pilots.map(pilot=>
                        <div className="tableCell"> {pilot.crewId}</div>
                        )}  
                    </div>
                    
                </div>
                
            <div className = "airplanesTable hide">
                <div className="openSearchAirplaneButton">Поиск</div>
                    <div className="searchAirplanePanel hide">
                        <input className="searchAirplane"  placeholder="Параметр поиска" value={airplaneParametr} onChange={e=>setAirplaneParametr(e.target.value)}></input>
                        <button className="SearchAirplaneButton" onClick={searchClick}>Найти</button>
                        <button className="closeSearchButton">close</button>
                </div> 

                <button className="closeTableButton">Close table</button>
                <div className="delete">Удаление<br/>
                        {flight.Airplanes.map(airplane=>
                            <div id={airplane.id} className="deleteAirplaneButton" onClick={click}>Удалить</div>
                            )}
                </div>
                <div className="airplnaId">Идентификатор<br/>
                        {flight.Airplanes.map(airplane=>
                            <div className="tableCell">{airplane.id}</div>
                            )}
                </div>
                <div className="placeAmount">Ко-во мест<br/>
                        {flight.Airplanes.map(airplane=>
                            <div className="tableCell">{airplane.placeAmount}</div>
                            )}
                </div>
                <div className="planeModel">Модель самолета<br/>
                        {flight.Airplanes.map(airplane=>
                                <div className="tableCell">{airplane.planeModel}</div>
                                )}
                </div>
                <div className="crewId">Команда самолета<br/>
                        {flight.Airplanes.map(airplane=>
                                <div className="tableCell">{airplane.crewId}</div>
                                )}
                </div>
            </div>

            <div className = "airportsTable hide">

                <div className="openSearchAirportButton">Поиск</div>
                        <div className="searchAirportPanel hide">
                            <input className="searchAirport"  placeholder="Параметр поиска" value={airportParametr} onChange={e=>setAirportParametr(e.target.value)}></input>
                            <button className="SearchAirportButton" onClick={searchClick}>Найти</button>
                            <button className="closeSearchButton">close</button>
                </div> 
                <button className="closeTableButton">Close table</button>
                <div className="delete">Удаление<br/>
                        {flight.Airports.map(airport=>
                                <div id={airport.id} className="deleteAirportButton" onClick={click}>Удалить</div>
                            )}
                </div>
                <div className="airportId">Идентификатор<br/>
                        {flight.Airports.map(airport=>
                                <div className="tableCell">{airport.id}</div>
                            )}
                </div>
                <div className="airportName"> Название аэропорта<br/>
                        {flight.Airports.map(airport=>
                                <div className="tableCell">{airport.airportName}</div>
                            )}
                </div>
                <div className="airportName"> Страна<br/>
                        {flight.Airports.map(airport=>
                                <div className="tableCell">{airport.airportCountry}</div>
                            )}
                </div>
                <div className="airportAddress">Адрес<br/>
                        {flight.Airports.map(airport=>
                                <div className="tableCell">{airport.airportAddress}</div>
                            )}
                </div>
            </div>

            <div className = "flightsTable hide">
                <div className="openSearchFlightButton">Поиск</div>
                            <div className="searchFlightPanel hide">
                                <button className ="openSearchFlight">Искать по строковым значениям</button>
                                <button className ="openSearchFlightDate">Искать по дате</button>
                                <button className="showAllFlights" onClick={searchClick}>Показать все</button>
                                <button className="closeSearchButton">close</button>


                                <div className="searchFlightBlock hide">
                                    <input className="searchFlight" type='text'  placeholder="Параметр поиска" value={flightParametr} onChange={e=>setFlightParametr(e.target.value)}></input>
                                    <button className="SearchFlightButton" onClick={searchClick}>Найти</button>
                                </div>
                                <div className="searchFlightByDateBlock hide">
                                    <input className="searchFlightDate" type='date'  placeholder="Параметр поиска" value={flightDateParametr} onChange={e=>setFlightDateParametr(e.target.value)}></input>
                                    <button className="SearchFlightDateButton" onClick={searchClick}>Найти</button>
                                </div>             
                </div> 
                <button className="closeTableButton">Close table</button>
                <div className="delete">Удаление<br/>
                        {flight.Flights.map(flight=>
                                <div id={flight.id} className="deleteFlightButton" onClick={click}>Удалить</div>
                            )}
                </div> 
                <div className="flightId">Идентификатор<br/>
                        {flight.Flights.map(flight=>
                                <div className="tableCell">{flight.id}</div>
                            )}
                </div>     
                <div className="departureDate">Дата отправления<br/>
                        {flight.Flights.map(flight=>
                                <div className="tableCell">{flight.departureDate}</div>
                            )}
                </div> 
                <div className="departureTime">Время отправления<br/>
                        {flight.Flights.map(flight=>
                                <div className="tableCell">{flight.departureTime}</div>
                            )}
                </div> 
                <div className="arrivalDate">Дата прибытия<br/>
                        {flight.Flights.map(flight=>
                                <div className="tableCell">{flight.arrivalDate}</div>
                            )}
                </div> 
                <div className="arrivalTime">Время прибытия<br/>
                        {flight.Flights.map(flight=>
                                <div className="tableCell">{flight.arrivalTime}</div>
                            )}
                </div>
                <div className="departurePoint">Место отправления<br/>
                        {flight.Flights.map(Flight=>
                            flight.Airports.map(airport=>
                                airport.id == Flight.departurePointId ?
                                    <div className="tableCell">{airport.airportName}</div>
                                    :
                                    null
                                )
                                
                            )}
                </div>
                <div className="departurePoint">Место прибытия<br/>
                        {flight.Flights.map(Flight=>
                            flight.Airports.map(airport=>
                                airport.id == Flight.placeOfDestinationId ?
                                    <div className="tableCell">{airport.airportName}</div>
                                    :
                                    null
                                )
                                
                            )}
                </div>
                <div className="airplane">Обслуживающий самолет<br/>
                        {flight.Flights.map(Flight=>
                            flight.Airplanes.map(airplane=>
                                airplane.id == Flight.airplaneId ?
                                    <div className="tableCell">{airplane.planeModel}</div>
                                    :
                                    null
                                )
                                
                            )}
                </div>
            </div>

            <div className="modalBackgroundPilot hide">
                    <div className="modalWindowPilot">
                        <h2>Добавление пилота</h2>
                        <div className="pilotInput">
                            <input type="text" id="pilotName" placeholder="Введите имя пилота" required value={pilotName} onChange={e=>setPilotName(e.target.value)}></input>
                            <input type="text" id="pilotSurname" placeholder="Введите фамилию пилота" required value={pilotSurname} onChange={e=>setPilotSurname(e.target.value)}></input>
                            <input type="text" id="workExperience" placeholder="Введите стаж пилота (лет)" required value={workExperience} onChange={e=>setWorkExperience(e.target.value)}></input>
                            <input type="text" id="education" placeholder="Введите образование пилота" required value={education} onChange={e=>setEducation(e.target.value)}></input>
                            <label for="crewId">Выберите команду пилота</label>
                            <select id="crewId" value={crewId} onChange={e=>setCrewId(e.target.value)}>
                                <option></option>
                                {flight.Crews.map(crew=>
                                <option>{crew.id}</option>
                                    )}
                            </select>
                        </div>
                            
                        <button className="addPilotButton" onClick={click}>Добавить в базу</button>
                        <button className="closeModalButton">Close</button>
                    </div>
            </div>

            <div className="modalBackgroundAirplane hide">
                    <div className="modalWindowAirplane">
                        <h2>Добавление самолета</h2>
                        <div className="airplaneInput">
                            <input type="text" id="placeAmount" placeholder="Введите кол-во мест в самолете" required value={placeAmount} onChange={e=>setPlaceAmount(e.target.value)}></input>
                            <input type="text" id="planeModel" placeholder="Введите модель самолета" required value={planeModel} onChange={e=>setPlaneModel(e.target.value)}></input>
                            
                            <label for="crewId">Выберите команду, обслуживающую самолет</label>
                            <select id="crewId" value={crewId} onChange={e=>setCrewId(e.target.value)}>
                                <option></option>
                                {flight.Crews.map(crew=>
                                <option>{crew.id}</option>
                                    )}
                            </select>
                            
                        </div>

                        <button className="addAirplaneButton" onClick={click}>Добавить в базу</button>
                        <button className="closeModalButton">Close</button>
                    </div>
            </div>

            <div className="modalBackgroundAirport hide">
                    <div className="modalWindowAirport">
                        <h2>Добавление аэропорта</h2>
                        <div className="airportInput">
                            <input type="text" id="airportName" placeholder="Введите название аэропорта" required value={airportName} onChange={e=>setAirportName(e.target.value)}></input>
                            
                            <label for="airportCountry">Введите страну аэропорта</label>
                            <select id="airportCountry" value={airportCountry} onChange={e=>setAirportCountry(e.target.value)}>
                                <option></option>
                                {flight.Countries.map(country=>
                                <option>{country.name}</option>
                                    )}
                            </select>

                            <input type="text" id="airportAddress" placeholder="Введите адрес аэропорта (город включительно)" required value={airportAddress} onChange={e=>setAirportAddress(e.target.value)}></input>
                        </div>

                        <button className="addAirportButton" onClick={click}>Добавить в базу</button>
                        <button className="closeModalButton">Close</button>
                    </div>
            </div>

            <div className="modalBackgroundCrew hide">
                <div className="modalWindowCrew">
                    <h2>Добавление команды</h2> <br/>
                    <button className="addCrewButton" onClick={click}>Добавить в базу</button>
                    <button className="closeModalButton">Close</button>
                </div>
           </div>

           <div className="modalBackgroundFlight hide">
               <div className="modalWindowFlight">
                   <h2>Добавление рейса</h2>
                   <div className="flightInput">
                        <label for="departureDate">Дата отбытия</label>
                        <input id="departureDate" type="date" className="departureDate" value={departureDate} onChange={e=>setDepartureDate(e.target.value)}></input>
                        <label for="arrivalDate">Дата прибытия</label>
                        <input id="arrivalDate" type="date" className="arrivalDate" value={arrivalDate} onChange={e=>setArrivalDate(e.target.value)}></input>

                        <label for="departureTime">Время отбытия</label>
                        <input id="departureTime" type="time" className="departureTime" value={departureTime} onChange={e=>setDepartureTime(e.target.value)}></input>
                        <label for="arrivalTime">Время прибытия</label>
                        <input id="arrivalTime" type="time" className="arrivalTime" value={arrivalTime} onChange={e=>setArrivalTime(e.target.value)}></input>

                        <label for="placeOfDestination">Место назначения</label>
                        <select id="placeOfDestination" className="placeOfDestination" value={placeOfDestinationId} onChange={e=>setPlaceOfDestination(e.target.value)}>
                            <option></option>
                            {flight.PlaceOfDestinations.map(destination=>
                                    <option label={destination.airport.airportName} >{destination.id}</option>
                                    )}
                        </select>

                        <label for="departurePoint">Место отправления</label>
                        <select id="departurePoint" className="departurePoint" value={departurePointId} onChange={e=>setDeparturePoint(e.target.value.split(',',1))}>
                            <option></option>
                            {flight.DeparturePoints.map(departure=>
                               
                                <option label ={departure.airport.airportName}>{departure.id}</option>
                                )}
                        </select>

                        <label for="airplane">Обслуживающий самолет</label>
                        <select id="airplane" className="airplane" value={airplaneId} onChange={e=>setAirplaneId(e.target.value)}>
                            <option></option>
                            {flight.Airplanes.map(plane=>
                                <option label ={plane.planeModel}>{plane.id}</option>
                                )}
                        </select>
                  
                   </div>

                   <button className="addFlightButton" onClick={click}>Добавить в базу</button>
                   <button className="closeModalButton">Close</button>
               </div>
           </div>
           
           <div className="changeButtons">
                <button className="PilotButton">Изменить пилота</button>
                <button className="AirplaneButton">Изменить самолет</button>
                <button className="AirportButton">Изменить аэропорт</button>
                <button className="CrewButton">Изменить команд</button>  
                <button className="FlightButton">Изменить рейс</button>
            </div>
            
            <div className="changePilotPanel hide">
                            <select id="pilotId" value={pilotId} onChange={e=>setPilotId(e.target.value)}>
                                <option></option>
                                {flight.Pilots.map(pilot=>
                                <option>{pilot.id}</option>
                                    )}
                                
                            </select>
                            <input type="text" id="pilotName" placeholder="Введите имя пилота" required value={pilotName} onChange={e=>{
                                    if(e.target.value == ''){
                                        return(setPilotName(undefined))                                   
                                    }else{
                                        return(setPilotName(e.target.value))
                                    }
                                }}></input>    
                            <input type="text" id="pilotSurname" placeholder="Введите фамилию пилота" required value={pilotSurname} onChange={e=>{
                                    if(e.target.value == ''){
                                        return(setPilotSurname(undefined))
                                    }else{
                                        return(setPilotSurname(e.target.value))  
                                    }                                    
                                }                                
                                }></input>
                            <input type="text" id="workExperience" placeholder="Введите стаж пилота (лет)" required value={workExperience} onChange={e=>{
                                    if(e.target.value == ''){
                                        return(setWorkExperience(undefined))
                                    }else{
                                        return(setWorkExperience(e.target.value))
                                    }    
                                }}></input>
                            <input type="text" id="education" placeholder="Введите образование пилота" required value={education} onChange={e=>{
                                    if(e.target.value == ''){
                                        return(setEducation(undefined))
                                    }else{
                                        return(setEducation(e.target.value)) 
                                    }
                                }}></input>
                            <label for="crewId">Выберите команду пилота</label>
                            <select id="crewId" value={crewId} onChange={e=>{
                                    if(e.target.value ==''){
                                        return(setCrewId(undefined))
                                    }else{
                                        return(setCrewId(e.target.value))
                                    }
                                }}>
                                <option></option>
                                {flight.Crews.map(crew=>
                                <option>{crew.id}</option>
                                    )}
                            </select>
                            <button className="changePilotButton" onClick={click}>Внести изменения</button>
            </div>

            <div className ="changeAirplanePanel hide">
                            <select id="airplaneId" value={airplaneId} onChange={e=>setAirplaneId(e.target.value)}>
                                <option></option>
                                {flight.Airplanes.map(airplane=>
                                <option>{airplane.id}</option>
                                    )}
                                                
                            </select>
                            {/* <input type="text" id="placeAmount" placeholder="Введите кол-во мест в самолете" required value={placeAmount} onChange={e=>setPlaceAmount(e.target.value)}></input> */}
                            <input type="text" id="planeModel" placeholder="Введите модель самолета" required value={planeModel} onChange={e=>{
                                    if(e.target.value==''){
                                            setPlaneModel(undefined)
                                    }else{
                                            setPlaneModel(e.target.value)
                                    }
                                }}></input>
                            
                            <label for="crewId">Выберите команду, обслуживающую самолет</label>
                            <select id="crewId" value={crewId} onChange={e=>{
                                    if(e.target.value ==''){
                                        setCrewId(undefined)
                                    }else{
                                        setCrewId(e.target.value)
                                    }
                                }}>
                                <option></option>
                                {flight.Crews.map(crew=>
                                <option>{crew.id}</option>
                                    )}
                            </select>
                            <button className="changeAirplaneButton" onClick={click}>Внести изменения</button>

            </div>
        
            <div className="changeAirportPanel hide">
                            <select id="airportCountry" value={airportId} onChange={e=>setAirportId(e.target.value)}>
                                                <option></option>
                                                {flight.Airports.map(airport=>
                                                <option>{airport.id}</option>
                                                    )}
                            </select>
                            <input type="text" id="airportName" placeholder="Введите название аэропорта" required value={airportName} onChange={e=>{
                                    if(e.target.value==''){
                                       setAirportName(undefined) 
                                    }else{
                                       setAirportName(e.target.value)
                                    }    
                                }
                            }></input>
                            <label for="airportCountry">Введите страну аэропорта</label>
                            <select id="airportCountry" value={airportCountry} onChange={e=>{
                                    if(e.target.value==''){
                                        setAirportCountry(undefined)
                                    }else{
                                        setAirportCountry(e.target.value)
                                    }    
                                }
                            }>
                                <option></option>
                                {flight.Countries.map(country=>
                                <option>{country.name}</option>
                                    )}
                            </select>

                            <input type="text" id="airportAddress" placeholder="Введите адрес аэропорта (город включительно)" required value={airportAddress} onChange={e=>{
                                    if(e.target.value==''){
                                        setAirportAddress(undefined) 
                                    }else{
                                        setAirportAddress(e.target.value)
                                    }
                                    
                                }
                            }></input>

                            <button className="changeAirportButton" onClick={click}>Внести изменения</button>
            </div>
        
            <div className="changeFlightPanel hide">
                        <select className="flightId" value={flightId} onChange={e=>setFlightId(e.target.value)}>
                                        <option></option>
                                        {flight.Flights.map(flight=>
                                            <option>{flight.id}</option>
                                            )}
                        </select>
                       
                        <label for="departureDate">Дата отбытия</label>
                        <input id="departureDate" type="date" className="departureDate" value={departureDate} onChange={e=>{
                                if(e.target.value==''){
                                    setDepartureDate(undefined)
                                }else{
                                    setDepartureDate(e.target.value)
                                }
                                                        
                        }}></input>
                        
                        <label for="departureTime">Время отбытия</label>
                        <input id="departureTime" type="time" className="departureTime" value={departureTime} onChange={e=>{
                            if(e.target.value==''){
                                setDepartureTime(undefined)
                            }else{
                                setDepartureTime(e.target.value)
                            }
                        }
                            }></input>
                        
                        <label for="arrivalDate">Дата прибытия</label>
                        <input id="arrivalDate" type="date" className="arrivalDate" value={arrivalDate} onChange={e=>{
                                if(e.target.value==''){
                                    setArrivalDate(undefined)
                                }else{
                                    setArrivalDate(e.target.value)
                                }
                        }}></input>

                        <label for="arrivalTime">Время прибытия</label>
                        <input id="arrivalTime" type="time" className="arrivalTime" value={arrivalTime} onChange={e=>{
                                if(e.target.value==''){
                                    setArrivalTime(undefined)
                                }else{
                                    setArrivalTime(e.target.value)
                                }
                            }
                        }></input>

                        <label for="departurePoint">Место отправления</label>
                        <select id="departurePoint" className="departurePoint" value={departurePointId} onChange={e=>{
                                    if(e.target.value==''){
                                        setDeparturePoint(undefined)
                                    }else{
                                        setDeparturePoint(e.target.value)
                                    }
                                }
                            }>
                            <option></option>
                            {flight.DeparturePoints.map(departure=>
                               
                                <option label ={departure.airport.airportName}>{departure.id}</option>
                                )}
                        </select>
                        
                        <label for="placeOfDestination">Место назначения</label>
                        <select id="placeOfDestination" className="placeOfDestination" value={placeOfDestinationId} onChange={e=>{
                            
                                    if(e.target.value==''){
                                        setPlaceOfDestination(undefined)
                                    }else{
                                        setPlaceOfDestination(e.target.value)
                                    }
                                }
                            }>
                            <option></option>
                            {flight.PlaceOfDestinations.map(destination=>
                                    <option label={destination.airport.airportName} >{destination.id}</option>
                                    )}
                        </select>

                        <label for="airplane">Обслуживающий самолет</label>
                        <select id="airplane" className="airplane" value={airplaneId} onChange={e=>{
                                    if(e.target.value==''){
                                        setAirplaneId(undefined) 
                                    }else{
                                        setAirplaneId(e.target.value) 
                                    }
                                }       
                            }>
                            <option></option>
                            {flight.Airplanes.map(plane=>
                                <option label ={plane.planeModel}>{plane.id}</option>
                                )}
                        </select>
            
                        <button className="changeFlightButton" onClick={click}>Внести изменения</button>     
            </div>
        </div>
    )
});

export default Admin;