const { Feedback } = require("../models");

async function createFeedback(req, res) {
  try {
    const { email, name_user, comments, rating } = req.body;
    const feedback = await Feedback.create({
      email: email,
      name_user: name_user,
      comments: comments,
      rating: rating,
    });
    const response = {
      code: 201,
      status: "Created",
      data: feedback,
    };
    return res.status(response.code).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      status: "Internal Server Error",
      message: "An error occurred while processing your request",
    });
  }
}

module.exports = {
  createFeedback,
};