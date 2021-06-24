const {DeparturePoint} = require ('../models/models');
const {Airport} = require ('../models/models');
class departurePointController{
    
    async create(req, res){

    }
    async getAll(req, res){

        const departures = await DeparturePoint.findAll({
            include:[{model: Airport, as: 'airport'}]
        });
        return res.json(departures);
    }
    async getOne(req, res){
        const {id} = req.params;
        const departure = await DeparturePoint.findOne({
            where: {id},
            include:[{model: Airport, as: 'airport'}]
        });
        return res.json(departure);
    }

}

module.exports = new departurePointController();