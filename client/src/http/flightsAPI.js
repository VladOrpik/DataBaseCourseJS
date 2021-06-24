import {$authHost, $host} from './index';
import jwt_decode from "jwt-decode";
import { useParams } from 'react-router';



// PILOT'S API
export const createPilot = async (pilotName, pilotSurname, workExperience, education, crewId) =>{

    const {data} = await $authHost.post('api/pilot', {pilotName, pilotSurname, workExperience, education, crewId});
    return alert(data.message);

};

export const getPilots = async (querys) =>{
    if(querys){
        const {data} = await $host.get('api/pilot'+ querys);
        return data;
    }else{
        const {data} = await $host.get('api/pilot');
        return data;
    }

    

};

export const deletePilot = async (pilotId) =>{

    const {data} = await $authHost.delete('api/pilot/' + pilotId);
    return alert('Пилот успешно удален');

};
export const changePilot = async (pilotId,pilotName, pilotSurname, workExperience, education, crewId) =>{

    const {data} = await $authHost.put('api/pilot/'+pilotId,{pilotName, pilotSurname, workExperience, education, crewId});
    return alert(data.message);

};

// AIRPLANE'S API

export const createAirplane = async (placeAmount, planeModel, crewId) =>{

    const {data} = await $authHost.post('api/airplane', {placeAmount, planeModel, crewId});
    return alert('Самолет успешно создан');

};

export const getAirplanes = async (querys) =>{
    if(querys){
        const {data} = await $host.get('api/airplane'+querys);
        return data;  
    }else{
        const {data} = await $host.get('api/airplane');
        return data; 
    }

    

};

export const deleteAirplane = async (id) =>{

    const {data} = await $authHost.delete('api/airplane/'+id);
    return alert(data.message);

};

export const changeAirplane = async (airplaneId, planeModel, crewId) =>{

    const {data} = await $authHost.put('api/airplane/'+airplaneId, {planeModel, crewId});
    return alert(data.message);

};



// AIRPORT'S API

export const createAirport = async (airportName, airportCountry, airportAddress) =>{

    const {data} = await $authHost.post('api/airport', {airportName, airportCountry, airportAddress});
    return alert('Аэропорт успешно создан');

};

export const getAirports = async (querys) =>{
    if(querys){
        const {data} = await $host.get('api/airport'+querys);
        return data;
    }else{
        const {data} = await $host.get('api/airport');
        return data;
    }
    

};

export const deleteAirport = async (id) =>{

    const {data} = await $authHost.delete('api/airport/'+id);
    return alert(data.message);

};

export const changeAirport = async (airportId, airportName, airportCountry, airportAddress) =>{

    const {data} = await $authHost.put('api/airport/'+airportId, {airportName, airportCountry, airportAddress});
    return alert(data.message);

};

// CREW'S API

export const createCrew = async () =>{

    const {data} = await $authHost.post('api/crew', {});
    return alert(`Команда с id: ${data.id} успешно создан`);

};
export const getCrews = async () =>{

    const {data} = await $host.get('api/crew', {});
    return data;

};

export const getDeparturePoints = async () =>{

    const {data} = await $host.get('api/departure', {});
    return data;

};

export const getPlaceOfDestinations = async () =>{

    const {data} = await $host.get('api/destination', {});
    return data;

};

// FLIGHT

export const createFlight = async (departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId) =>{

    const {data} = await $authHost.post('api/flight', {departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId});
    return alert(data.message);

};

export const getOneFlight = async (id) =>{

    const {data} = await $host.get('api/flight/'+id);
    return data;

};

export const getFlights = async (querys) =>{
    if(querys){
        const {data} = await $host.get('api/flight'+querys);
        return data;
    }else{
        const {data} = await $host.get('api/flight');
        return data;
    }

    

};
export const deleteFlight = async (id) =>{

    const {data} = await $authHost.delete('api/flight/' + id);
    return alert(data.message);

};
export const changeFlight = async (flightId,departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId) =>{

    const {data} = await $authHost.put('api/flight/'+flightId, {departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId});
    return alert(data.message);

};

// export const login = async (email, password) =>{

//     const {data} = await $host.post('api/client/login', {email, password, role:'ADMIN'});
//     localStorage.setItem('token', data.token);
//     return jwt_decode(data.token);

// };
// export const check = async () =>{

//     const {data} = await $authHost.get('api/client/auth');
//     localStorage.setItem('token', data.token);
//     return jwt_decode(data.token);

// };