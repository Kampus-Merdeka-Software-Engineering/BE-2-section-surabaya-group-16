const {Feedback} = require('../models')

async function getFeedback(req, res){
    const feedback = await Feedback.findAll()
    const response = {
        code: 200,
        status: "Ok",
        data: feedback,
    };
    return res.status(response.code).json(response);
};

module.exports = {
    getFeedback
}