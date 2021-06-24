const { Op } = require("sequelize");
const {AirPlane} = require ('../models/models');
const {Seat} = require ('../models/models');
const {Crew} = require ('../models/models');
const ApiError = require('../error/ApiError');

class airplaneController{
    
    async create(req, res){
        const {placeAmount, planeModel, crewId} = req.body;
        const airplane = await AirPlane.create({placeAmount, planeModel, crewId});
        let seatClass;
        let row;
        for(let i=1; i<=placeAmount; i++){
            row = Math.ceil(i/6);
            if(i<13){
                seatClass = "A";
            }else if(i<25){
                seatClass ="B";
            }else{
                seatClass ="C";
            }
             const seats = await Seat.create({seatNumber: i,seatClass: seatClass, row: row,airplaneId: airplane.id})
        }
        return res.json(airplane);
        
    }
    async getAll(req, res, next){
        const {parametr} = req.query;
        if(parametr && Number(parametr) == parametr){
            const airplanes = await AirPlane.findAll({
                    where:{
                        [Op.or]: [
                            {id: parametr},
                            {placeAmount: parametr},
                            {crewId: parametr}
                        ]
                    }
                }    
            );
            return res.json(airplanes);

        }else if(parametr && typeof parametr == 'string'){
            const airplanes = await AirPlane.findAll({
                where:{
                    [Op.or]: [
                        {planeModel: parametr}
                    ]
                }
            });
            return res.json(airplanes);
        }else{
            const airplanes = await AirPlane.findAll();
            return res.json(airplanes);
        }
       
    }

    async getOne(req, res){
        const {id}= req.params;
        const airplane = await AirPlane.findOne({
            where:{id},
            include:[{model: Seat, as: 'seats'}]
        });
        return res.json(airplane);
    }

    async deleteOne(req, res){
        const {id}= req.params;
        let airplaneName;
        await Seat.destroy({
            where:{airplaneId: id}
        });
        const airplane = await AirPlane.findOne({
            where:{id}
        });
        airplaneName = airplane.planeModel;
        await AirPlane.destroy({
            where:{id}
        });
        return res.json({message:`Самолет ${airplaneName} успешно удален`});
    }

    async changeOne(req, res){
        const {id} = req.params;
        const {planeModel, crewId} = req.body;
        await AirPlane.update(
            {planeModel, crewId},
            {where:{id}}
        );
        return res.json({message: "Самолет успешно изменен"});

    }



}

module.exports = new airplaneController();