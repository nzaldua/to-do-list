import { Router } from 'express';
import { ActivityModel } from '../schema/todo.model';
import { Helper } from '../helper';

const router = Router();
// List to-dos
router.route('/').get(async (req, res) => {
  const [response, error] = await Helper(ActivityModel.find());

  res.status(response ? 200 : 400).json({
    body: response ?? error,
  });
});

// Create to-do
router.route('/add').post(async (req, res) => {
  const { activity } = req.body;

  const newActivity = new ActivityModel({
    activity,
  });

  const [response, error] = await Helper(newActivity.save());

  res.status(response ? 200 : 400).json({
    body: response ?? error,
  });
});

// Read to-do
router.route('/:id').get(async (req, res) => {
  const [response, error] = await Helper(ActivityModel.findById(req.params.id));

  res.status(response ? 200 : 400).json({
    body: response ?? error,
  });
});

// Update to-do
router.route('/:id/update').put(async (req, res) => {
  const [response, error] = await Helper(
    ActivityModel.findByIdAndUpdate(req.params.id, req.body)
  );

  res.status(response ? 200 : 400).json({
    body: response ?? error,
  });
});

// Delete to-do
router.route('/:id/delete').delete(async (req, res) => {
  const [response, error] = await Helper(
    ActivityModel.findByIdAndDelete(req.params.id)
  );

  res.status(response ? 200 : 400).json({
    body: response ?? error,
  });
});

export { router };
