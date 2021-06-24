const { request } = require('express');
const {Crew} = require ('../models/models');
const {Pilot} = require ('../models/models');
class crewController{
    
    async create(req, res){
        const crew = await Crew.create({});
        return res.json(crew);
    }
    async getAll(req, res){
            const crews = await Crew.findAll({
                include:[{model: Pilot, as: "pilots"}]
            });
            return res.json(crews);
        }
        
    async getOne(req, res){
        const {id} = req.params;
            const crew = await Crew.findOne(
                {
                    where:{id},
                    include:[{model: Pilot, as: "pilots"}]
                }
            );
            return res.json(crew);   
    }

}

module.exports = new crewController();