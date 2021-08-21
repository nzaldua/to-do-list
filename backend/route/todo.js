const router = require('express').Router();
let model = require('../schema/todo.model');

router.route('/').get(async (req, res) => {
  const todo = await model.find();
  res.json({
    body: todo
  });
});

router.route('/add').post(async (req, res) => {
  const activity = req.body.activity;

  const newActivity = new model({
    activity
  })

  const response = await newActivity.save();
  res.json({
    body: response
  });
});

module.exports = router;