const {Room} = require('../models')

async function getRoom(req, res){
    const rooms = await Room.findAll()
    const response = {
        code: 200,
        status: "Ok",
        data: rooms,
    };
    return res.status(response.code).json(response);
};

module.exports = {
    getRoom
}