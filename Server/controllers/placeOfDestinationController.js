const {PlaceOfDestination} = require ('../models/models.js');
const {Airport} = require ('../models/models');
class placeOfDestinationController{
    
    async create(req, res){

    }
    async getAll(req, res){
        const destinations = await PlaceOfDestination.findAll({
            include:[{model: Airport, as: 'airport'}]
        });
        return res.json(destinations);
    }
    async getOne(req, res){
        const {id} = req.params;
        const destination = await PlaceOfDestination.findOne({
            where: {id},
            include:[{model: Airport, as: 'airport'}]
        });
        return res.json(destination);
    }

}

module.exports = new placeOfDestinationController();