const {Ticket} = require('../models/models');
// const {Registration} = require ('../models/models.js');
class ticketController{
    
    async create(req, res){
        const {agentName, price, clientId,flightId} = req.body;
        const ticket = await Ticket.create({agentName, price, clientId,flightId});
        return res.json(ticket);
    }
    async getAll(req, res){
        const tickets = await Ticket.findAll({

        });
        return res.json(tickets);
    }
    async getOne(req, res){
        const {id}= req.params;
        const ticket = await Ticket.findOne({
            where:{id}
        });
        return res.json(ticket);
    }

}

module.exports = new ticketController();