const currentLocation = function(e){
    const currentLocation = document.location.href;
    const adminLocation = currentLocation.indexOf('/admin');
    if(adminLocation !== -1){
        try{
            const pilotButton = document.querySelector('.createButtons .PilotButton');
            const airplaneButton = document.querySelector('.createButtons .AirplaneButton');
            const airportButton = document.querySelector('.createButtons .AirportButton');
            const crewButton = document.querySelector('.createButtons .CrewButton');
            const flightButton = document.querySelector('.createButtons .FlightButton');

            const modalPilot = document.querySelector('.modalBackgroundPilot');
            const modalAirplane = document.querySelector('.modalBackgroundAirplane');
            const modalAirport = document.querySelector('.modalBackgroundAirport');
            const modalCrew = document.querySelector('.modalBackgroundCrew');
            const modalFlight = document.querySelector('.modalBackgroundFlight');
            
            const openModal = (modal) =>{
                modal.classList.add('open');
                modal.classList.remove('hide');
            };
            const closeModal = (modal) =>{
                modal.classList.remove('open');
                modal.classList.add('hide'); 
            };

            pilotButton.addEventListener('click', function(){
                openModal(modalPilot);
                modalPilot.addEventListener('click', function(e){

                    if(e.target == modalPilot){
                        closeModal(modalPilot);
                    }
                    
                });
                document.addEventListener('keydown', function(e){
                    if(e.key == 'Escape'){
                            closeModal(modalPilot);
                    }
                });
                
            });
            airplaneButton.addEventListener('click', function(){
                openModal(modalAirplane);
                modalAirplane.addEventListener('click', function(e){

                    if(e.target == modalAirplane){
                    closeModal(modalAirplane);
                    }
                
                });
                document.addEventListener('keydown', function(e){
                    if(e.key == 'Escape'){
                        closeModal(modalAirplane);
                    }
                });
            });
            airportButton.addEventListener('click', function(){
                openModal(modalAirport);
                modalAirport.addEventListener('click', function(e){

                    if(e.target == modalAirport){
                    closeModal(modalAirport);
                    }
                
                });
                document.addEventListener('keydown', function(e){
                    if(e.key == 'Escape'){
                        closeModal(modalAirport);
                    }
                });
            });
            crewButton.addEventListener('click', function(){
                openModal(modalCrew);
                modalCrew.addEventListener('click', function(e){

                    if(e.target == modalCrew){
                    closeModal(modalCrew);
                    }
                
                });
                document.addEventListener('keydown', function(e){
                    if(e.key == 'Escape'){
                        closeModal(modalCrew);
                    }
                });
            });
            flightButton.addEventListener('click',function(){
                openModal(modalFlight);
                modalFlight.addEventListener('click', function(e){

                    if(e.target == modalFlight){
                    closeModal(modalFlight);
                    }
                
                });
                document.addEventListener('keydown', function(e){
                    if(e.key == 'Escape'){
                        closeModal(modalFlight);
                    }
                });
            });


            const closePilotButton = document.querySelector('.modalWindowPilot .closeModalButton');
                closePilotButton.addEventListener('click', function(){
                    closeModal(modalPilot);
                });
            const closeAirplaneButton = document.querySelector('.modalWindowAirplane .closeModalButton');
            closeAirplaneButton.addEventListener('click', function(){
                closeModal(modalAirplane);
            });
            const closeAirportButton = document.querySelector('.modalWindowAirport .closeModalButton');
            closeAirportButton.addEventListener('click', function(){
                closeModal(modalAirport);
            });
            const closeCrewButton = document.querySelector('.modalWindowCrew .closeModalButton');
            closeCrewButton.addEventListener('click', function(){
                closeModal(modalCrew);
            });
            const closeFlightButton = document.querySelector('.modalWindowFlight .closeModalButton');
            closeFlightButton.addEventListener('click', function(){
                closeModal(modalFlight);
            });



            const openTable = (table) =>{
                table.classList.add('openTable');
                table.classList.remove('hide');
            };
            const closeTable = (table) =>{
                table.classList.remove('openTable');
                table.classList.add('hide'); 
            };

            const checkPilotButton = document.querySelector('.checkButtons .PilotButton');
            const pilotTable = document.querySelector('.pilotsTable');
            const closePilotTableButton = document.querySelector('.pilotsTable .closeTableButton');

            const checkAirplaneButton = document.querySelector('.checkButtons .AirplaneButton');
            const airplaneTable = document.querySelector('.airplanesTable');
            const closeAirplaneTableButton = document.querySelector('.airplanesTable .closeTableButton');
           
            const checkAirportButton = document.querySelector('.checkButtons .AirportButton');
            const airportTable = document.querySelector('.airportsTable');
            const closeAirportTableButton = document.querySelector('.airportsTable .closeTableButton');

            const checkCrewButton = document.querySelector('.checkButtons .CrewButton');

            const checkFlightButton = document.querySelector('.checkButtons .FlightButton');
            const flightTable = document.querySelector('.flightsTable');
            const closeFlightTableButton = document.querySelector('.flightsTable .closeTableButton');


            checkPilotButton.addEventListener('click', function(){
                openTable(pilotTable); 
                closeTable(airplaneTable);   
                closeTable(airportTable); 
                closeTable(flightTable); 
            });
            closePilotTableButton.addEventListener('click', function(){
                closeTable(pilotTable);
            });


            checkAirplaneButton.addEventListener('click', function(){
                openTable(airplaneTable); 
                closeTable(pilotTable);
                closeTable(airportTable);  
                closeTable(flightTable);     
            });

            closeAirplaneTableButton.addEventListener('click', function(){
                closeTable(airplaneTable);
            });


            checkAirportButton.addEventListener('click', function(){
                openTable(airportTable); 
                closeTable(pilotTable);
                closeTable(airplaneTable);
                closeTable(flightTable);       
            });
            closeAirportTableButton.addEventListener('click', function(){
                closeTable(airportTable);
            });


            checkFlightButton.addEventListener('click', function(){
                openTable(flightTable); 
                closeTable(pilotTable);
                closeTable(airplaneTable);
                closeTable(airportTable);      
            });
            closeFlightTableButton.addEventListener('click', function(){
                closeTable(flightTable);
            });



         // СКРИПТ ДЛЯ ПОЯВЛЕНИЯ МОДАЛЬНОГО ОКНА ПО ВНЕСЕНИЮ ИЗМЕНЕНИЙ В БАЗУ ДАННЫХ
            const changePilotButton = document.querySelector('.changeButtons .PilotButton');
            const changePilotPanel = document.querySelector('.changePilotPanel');

            const changeAirplaneButton = document.querySelector('.changeButtons .AirplaneButton');
            const changeAirplanePanel = document.querySelector('.changeAirplanePanel');

            const changeAirportButton = document.querySelector('.changeButtons .AirportButton');
            const changeAirportPanel = document.querySelector('.changeAirportPanel');

            const changeFlightButton = document.querySelector('.changeButtons .FlightButton');
            const changeFlightPanel = document.querySelector('.changeFlightPanel');



            changePilotButton.addEventListener('click', function(){
                changePilotPanel.classList.toggle('hide');
                closeModal(changeAirplanePanel);
                closeModal(changeAirportPanel);
                closeModal(changeFlightPanel);

            });

            changeAirplaneButton.addEventListener('click', function(){
                changeAirplanePanel.classList.toggle('hide');
                closeModal(changePilotPanel);
                closeModal(changeAirportPanel);
                closeModal(changeFlightPanel);
            });

            changeAirportButton.addEventListener('click', function(){
                changeAirportPanel.classList.toggle('hide');
                closeModal(changeAirplanePanel);
                closeModal(changePilotPanel);
                closeModal(changeFlightPanel);
            });

            changeFlightButton.addEventListener('click', function(){
                changeFlightPanel.classList.toggle('hide');
                closeModal(changeAirportPanel);
                closeModal(changeAirplanePanel);
                closeModal(changePilotPanel);
            });

        }catch(error){
           console.log(error);
        }
        
 };
}

window.addEventListener('DOMContentLoaded', currentLocation);
document.addEventListener('keydown', currentLocation);
document.addEventListener('click', currentLocation);