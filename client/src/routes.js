import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Flights from "./pages/Flights";
import Flight from './pages/Flight';

import { ADMIN_ROUTE, FLIGHTS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE,FLIGHT_ROUTE } from "./utils/consts";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FLIGHT_ROUTE + '/:id',
        Component: Flight
    },
    {
        path: FLIGHTS_ROUTE,
        Component: Flights
    }
    
];
