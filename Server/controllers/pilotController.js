
const { Op } = require("sequelize");
const {Pilot} = require ('../models/models');
class pilotController{
    
    async create(req, res){
        const {pilotName, pilotSurname, workExperience, education, crewId} = req.body;
        const pilot = await Pilot.create({pilotName, pilotSurname, workExperience, education, crewId});
        return res.json({message: `Пилот с id: ${pilot.id} успешно создан`});
    }
    async getAll(req, res){
        // const {crewId} = req.query;
        const {parametr} = req.query;
        if(parametr && Number(parametr) == parametr){
            const pilots = await Pilot.findAll({
                where:{
                    [Op.or]: [
                        {id: parametr},
                        
                        {crewId: parametr}
                    ]
                }
                
            });
            console.log("NUMBER PARAMETR"+ parametr);
            return res.json(pilots);
        }else if(parametr && typeof parametr == 'string'){
            const pilots = await Pilot.findAll({
                where:{
                    [Op.or]: [
                        {pilotName: parametr},
                        {pilotSurname: parametr},
                        {workExperience: parametr},
                        {education:parametr}
                    ]
                }          
            });
            console.log(`STRING PARAMETR ${parametr} TYPE ${Number(parametr)}`  );
            return res.json(pilots);
        }else{
            const pilots = await Pilot.findAll();
            console.log("ALL PARAMETR"+ parametr);
            return res.json(pilots);
        }
        
        
        
    }
    async getOne(req, res){
        const {id} = req.params;
        const pilot = await Pilot.findOne({
            where:{id}
        });
        res.json(pilot);
    }

    async changeOne(req, res){
        try{
            let {pilotName, pilotSurname, workExperience, education, crewId} = req.body;
            console.log("THIS DATA:" + pilotName, pilotSurname, workExperience, education, crewId);
            const {id} = req.params;
            await Pilot.update(
                {pilotName, pilotSurname, workExperience, education, crewId},
                {where:{id}}
            );
            return res.json({message: "Пилот успешно отредактирован"});
        }catch(e){
            console.log("ERROR HANDLING:"+ e.message);
        }
        
    }

    async deleteOne(req,res){
        try{
            const {id} = req.params;
            console.log('PILOT ID TO DELETE:'+ id);
            await Pilot.destroy({
                where:{id}
            });
            return res.json('Пилот успешно удален');
        }catch(e){
            console.log('ERROR:'+ e);
        }
        
    }

}

module.exports = new pilotController();