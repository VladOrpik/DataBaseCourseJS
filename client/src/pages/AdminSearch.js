const currentLocation = function(e){
    const currentLocation = document.location.href;
    const adminLocation = currentLocation.indexOf('/admin');

    function openModal(modal){
        modal.classList.add('open');
        modal.classList.remove('hide');
    }
    function closeModal(modal){
        modal.classList.add('hide');
        modal.classList.remove('open');  
    }

    if(adminLocation !== -1){
        try{
         const openSearchPilotPanelButton = document.querySelector('.pilotsTable .openSearchPilotButton');
         const searchPilotPanel = document.querySelector('.pilotsTable .searchPilotPanel');
         const closeSearchPilotButton = document.querySelector('.pilotsTable .searchPilotPanel .closeSearchButton');

         openSearchPilotPanelButton.addEventListener('click', function(){
            openModal(searchPilotPanel);
         });

         closeSearchPilotButton.addEventListener('click', function(){
            closeModal(searchPilotPanel);
         });

         const openSearchAirplanePanelButton = document.querySelector('.airplanesTable .openSearchAirplaneButton');
         const searchAirplanePanel = document.querySelector('.airplanesTable .searchAirplanePanel');
         const closeSearchAirplaneButton = document.querySelector('.airplanesTable .searchAirplanePanel .closeSearchButton');

         openSearchAirplanePanelButton.addEventListener('click', function(){
            openModal(searchAirplanePanel);
         });

         closeSearchAirplaneButton.addEventListener('click', function(){
            closeModal(searchAirplanePanel);
         });

         const openSearchAirportPanelButton = document.querySelector('.airportsTable .openSearchAirportButton');
         const searchAirportPanel = document.querySelector('.airportsTable .searchAirportPanel');
         const closeSearchAirportButton = document.querySelector('.airportsTable .searchAirportPanel .closeSearchButton');

         openSearchAirportPanelButton.addEventListener('click', function(){
            openModal(searchAirportPanel);
         });

         closeSearchAirportButton.addEventListener('click', function(){
            closeModal(searchAirportPanel);
         });

         const openSearchFlightPanelButton = document.querySelector('.flightsTable .openSearchFlightButton');
         const searchFlightPanel = document.querySelector('.flightsTable .searchFlightPanel');
         const closeSearchFlightButton = document.querySelector('.flightsTable .searchFlightPanel .closeSearchButton');

         openSearchFlightPanelButton.addEventListener('click', function(){
            openModal(searchFlightPanel);
         });

         closeSearchFlightButton.addEventListener('click', function(){
            closeModal(searchFlightPanel);
         });

         const openSearchFlightInput = document.querySelector('.searchFlightPanel .openSearchFlight');
         const searchFlightBlock = document.querySelector('.searchFlightPanel .searchFlightBlock');
         openSearchFlightInput.addEventListener('click', function(){
               searchFlightBlock.classList.toggle('hide');
               closeModal(searchFlighByDatetBlock);
         });

         const openSearchFlightByDateInput = document.querySelector('.searchFlightPanel .openSearchFlightDate');
         const searchFlighByDatetBlock = document.querySelector('.searchFlightPanel .searchFlightByDateBlock');
            openSearchFlightByDateInput.addEventListener('click', function(){
            searchFlighByDatetBlock.classList.toggle('hide');
            closeModal(searchFlightBlock);
      });




        }catch(e){

        }
    }
}

window.addEventListener('DOMContentLoaded', currentLocation);
document.addEventListener('keydown', currentLocation);
document.addEventListener('click', currentLocation);