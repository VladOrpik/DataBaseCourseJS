const {Seat} = require ('../models/models');
class seatController{
    
    async create(req, res){
        // const {seatNumber, row, seatClass,airplaneId,ticketId} = req.body;
        // const seat = await Seat.create({seatNumber, row, seatClass,airplaneId,ticketId});
        // return res.json(seat);
    }
    async getAll(req, res){
        const {airplaneId} = req.query;
        if(airplaneId){
            const seats = await Seat.findAll({
                where:{airplaneId},
            });
            return res.json(seats);
        }else{
            const seats = await Seat.findAll();
            return res.json(seats);
        }
        
    }
    async getOne(req, res){
        const {id} = req.params;
        const seat = await Seat.findOne({
            where:{id}
        });
        return res.json(seat);
    }

}

module.exports = new seatController();