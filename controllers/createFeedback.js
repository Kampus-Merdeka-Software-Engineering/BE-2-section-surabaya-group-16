const { Feedback } = require("../models");

async function createFeedback(req, res) {
  try {
    const { feedback_id, email, name_user, comments, img_user} = req.body;
    console.log(req.body)
    // const book = await Book.findByPk(book_id);
    // if (!book) {
    //   return res
    //     .status(404)
    //     .json({ code: 404, status: "Not Found", message: "Book not found" });
    // }

    const feedback = await Feedback.create({
        feedback_id : feedback_id,
      email : email,
      name_user : name_user,
      comments : comments,
      img_user : img_user,
    });

    // Update status buku menjadi 'booked' atau sesuai kebutuhan
    // await book.update({ status: "booked" });

    // Berikan respons
    const response = {
      code: 201,
      status: "Created",
      data: feedback,
    };

    return res.status(response.code).json(response);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        code: 500,
        status: "Internal Server Error",
        message: "An error occurred while processing your request",
      });
  }
}

module.exports = {
  createFeedback
};