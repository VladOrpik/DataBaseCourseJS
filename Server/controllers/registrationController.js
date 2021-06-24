const {Registration} = require ('../models/models.js');
const {Ticket} = require ('../models/models.js');

class registrationController{
    
    async create(req, res){
        const {registrationDate, registrationTime, confirmation,resonOfRefuse, ticketId} = req.body;
        const registration = await Registration.create({registrationDate, registrationTime, confirmation,resonOfRefuse, ticketId});
        return res.json(registration);
    }
    async getAll(req, res){
        const registrations = await Registration.findAll({
            include:[{model: Ticket, as: 'ticket'}]
        });
        return res.json(registrations);
        
    }


}

module.exports = new registrationController();