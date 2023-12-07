const {Facilities} = require('../models')

async function getFacilities(req, res){
    const facilities = await Facilities.findAll()
    const response = {
        code: 200,
        status: "Ok",
        data: facilities,
    };
    return res.status(response.code).json(response);
};

module.exports = {
    getFacilities
}