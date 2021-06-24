const { Op } = require("sequelize");
const {AirPlane} = require ('../models/models');
const {Flight} = require ('../models/models');
const {DeparturePoint} = require ('../models/models');
const {Airport} = require ('../models/models');
class flightController{
    
    async create(req, res){
      const {departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId} = req.body;
      if(arrivalDate < departureDate){
          return res.json({message: "Даты указаны неверно"});
      }else if(arrivalDate == departureDate && arrivalTime < departureTime){
          return res.json({message: "Время указано неверно"});
      }else{
        const flight = await Flight.create({departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId});
        return res.json({message: `Рейс с id: ${flight.id} успешно создан`});
      }
      
      
    }
    async getAll(req, res){
        const {parametr} = req.query;
        let dateParametr;
        if(parametr && Number(parametr)==parametr){
                  const flights = await Flight.findAll({
                    where:{
                      [Op.or]:[
                        {id: parametr},
                      ]
                    },
                    include:[
                      {model: AirPlane, as: 'airplane'}
                    ]
                  });
                  return res.json(flights);
                }else if(parametr && typeof parametr == 'string'){
                    
                  
                    const airport = await Airport.findOne({
                        where:{airportName: parametr}
                    });
                    const plane = await AirPlane.findOne({
                        where:{planeModel: parametr}
                    });

                    if(airport !=null){
                      const airportId = airport.id;
                      const flights = await Flight.findAll({
                        where:{
                          [Op.or]:[
                            {departurePointId: airportId},
                            {placeOfDestinationId: airportId}
                          ]
                        },
                        include:[
                          {model: AirPlane, as: 'airplane'}
                        ]
                      });
                      return res.json(flights);
                      
                    }else if(plane !=null){
                      const planeId = plane.id;
                      const flights = await Flight.findAll({
                        where:{
                          [Op.or]:[
                            {airplaneId: planeId}
                          ]
                        },
                        include:[
                          {model: AirPlane, as: 'airplane'}
                        ]
                      });
                      return res.json(flights);
                    }
                }else if(parametr && dateParametr!= undefined){
                    const flights = await Flight.findAll({
                      where:{
                        [Op.or]:[
                          {departureDate: parametr},
                          {arrivalDate: parametr}
                        ]
                      },
                      include:[
                        {model: AirPlane, as: 'airplane'}
                      ]
                    });
                    return res.json(flights);
                }
                else{
                  const flights = await Flight.findAll({
                      include:[
                        {model: AirPlane, as: 'airplane'}
                      ]
                    });
                  return res.json(flights);
                }

        try{
          dateParametr = new Date(parametr);
            if(parametr && dateParametr!= undefined){
            const flights = await Flight.findAll({
              where:{
                [Op.or]:[
                  {departureDate: parametr},
                  {arrivalDate: parametr}
                ]
              },
              include:[
                {model: AirPlane, as: 'airplane'}
              ]
            });
            return res.json(flights);
          }
        }catch(e){

        }
        
        
        
    }
    async getOne(req, res){
        const {id} = req.params;
        const flight= await Flight.findOne({
          where:{id},
          include:[{model: AirPlane, as: 'airplane'}],
        });
        return res.json(flight);
    }

    async deleteOne(req,res){
      const {id} = req.params;
      await Flight.destroy({
        where:{id}
      });
      return res.json({message:"Рейс успешно удален"});
    }

    async changeOne(req, res){
      const{id} = req.params;
      const {departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId} = req.body;
      if(arrivalDate < departureDate){
        return res.json({message: "Даты указаны неверно"});
    }else if(arrivalDate == departureDate && arrivalTime < departureTime){
        return res.json({message: "Время указано неверно"});
    }else{
      await Flight.update(
        {departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId},
        {where:{id}}
      );
      return res.json({message: "Рейс успешно изменен"});
    }
      
    }

}

module.exports = new flightController();