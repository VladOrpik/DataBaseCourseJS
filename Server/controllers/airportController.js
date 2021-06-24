const { Op } = require("sequelize");
const {Airport} = require ('../models/models');
const {DeparturePoint} = require ('../models/models');
const {PlaceOfDestination} = require ('../models/models.js');
const {Flight} = require ('../models/models.js');

class airportController{
    
    async create(req, res){
        const {airportName, airportCountry, airportAddress} = req.body;
        const airport = await Airport.create({airportName, airportCountry, airportAddress});
        const airportId = airport.id;
        const departure = await DeparturePoint.create({airportId});
        const destination = await PlaceOfDestination.create({airportId});
        return res.json(airport);
    }
    async getAll(req, res){
        const {parametr} = req.query;
        if(parametr && Number(parametr) == parametr){
            const airports = await Airport.findAll({
                where:{
                    [Op.or]: [
                    {id:parametr}
                    ]
                }    
            });
            console.log("DATA TYPE" + typeof parametr);
            return res.json(airports); 
        }else if(parametr && typeof parametr == 'string'){
            const airports = await Airport.findAll({
                where:{
                    [Op.or]: [
                        {airportName:parametr},
                        {airportCountry:parametr},
                        {airportAddress:parametr}
                    ]  
                } 
            });
            console.log("DATA TYPE" + typeof parametr);
            return res.json(airports); 
        }else{
            const airports = await Airport.findAll();
            console.log("DATA TYPE" + typeof parametr);
            return res.json(airports); 
        }
        
    }
    async getOne(req, res){
        const {id} = req.params;
        const airport = await Airport.findOne(
            {
                where:{id}
            });
        return res.json(airport);
    }

    async deleteOne(req, res){
        const {id} = req.params;
        await DeparturePoint.destroy({
            where:{airportId: id}
        });
        await PlaceOfDestination.destroy({
            where: {airportId: id}
        });
        await Airport.destroy({
            where:{id}
        });
        
        // await Flight.destroy({
        //     where: {placeOfDestinationId: id}
        // });
        // await Flight.destroy({
        //     where: {departurePointId: id}
        // });

        return res.json({message: "Аэропорт успешно удален"});
    }

    async changeOne(req, res){
        const {id} = req.params;
        const {airportName, airportCountry, airportAddress} = req.body;
        await Airport.update(
            {airportName, airportCountry, airportAddress},
            {where:{id}}
        );
        return res.json({message: "Аэропорт успешно изменен"});
    }

}

module.exports = new airportController();