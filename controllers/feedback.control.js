const asyncHandler = require("express-async-handler");
const Feedback = require("../models/feedback.model");

const feedbackCtl = {
  getFeedabacks: asyncHandler(async (req, res) => {
    let data = await Feedback.find();
    res.send(data);
  }),
  deleteFeedback: asyncHandler(async (req, res) => {
    let id = req.params.id;

    await Feedback.findByIdAndDelete(id);
    res.send();
  }),
  updateFeedback: asyncHandler(async (req, res) => {
    let newData = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(newData);
  }),
  addFeedback: asyncHandler(async (req, res) => {
    let feedback = new Feedback(req.body);
    await feedback.save();
    res.send(feedback);
  }),
};

module.exports = feedbackCtl;
