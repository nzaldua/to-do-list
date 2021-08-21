const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const ToDo = mongoose.model(`activity`, new Schema(
  {
    activity: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true
  },
));

module.exports = ToDo;