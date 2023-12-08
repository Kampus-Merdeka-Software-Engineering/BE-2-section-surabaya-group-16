const {Book} = require('../models')

async function getBook(req, res){
    const book = await Book.findAll()
    const response = {
        code: 200,
        status: "Ok",
        data: book,
    };
    return res.status(response.code).json(response);
};

module.exports = {
    getBook
}