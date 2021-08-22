import { Router } from 'express';
import { ActivityModel } from '../schema/todo.model';
import { Helper } from '../helper';

const router = Router();
// List to-dos
router.route('/').get(async (req, res) => {
  const [response, error] = await Helper(ActivityModel.find());

  res
    .json({
      body: response ?? error,
    })
    .status(response ? 200 : 400);
});

// Create to-do
router.route('/add').post(async (req, res) => {
  const { activity } = req.body;

  const newActivity = new ActivityModel({
    activity,
  });

  const [response, error] = await Helper(newActivity.save());

  res
    .json({
      body: response ?? error,
    })
    .status(response ? 200 : 400);
});

// Read to-do
router.route('/:id').get(async (req, res) => {
  const [response, error] = await Helper(ActivityModel.findById(req.params.id));

  res
    .json({
      body: response ?? error,
    })
    .status(response ? 200 : 400);
});

// Update to-do
router.route('/:id/update').put(async (req, res) => {
  const [response, error] = await Helper(
    ActivityModel.findByIdAndUpdate(req.params.id, req.body)
  );

  res
    .json({
      body: response ?? error,
    })
    .status(response ? 200 : 400);
});

// Delete to-do
router.route('/:id/delete').delete(async (req, res) => {
  const [response, error] = await Helper(
    ActivityModel.findByIdAndDelete(req.params.id)
  );

  res
    .json({
      body: response ?? error,
    })
    .status(response ? 200 : 400);
});

export { router };
