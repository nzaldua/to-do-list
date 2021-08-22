import { Schema, model } from 'mongoose';

interface Activity {
  activity: string;
}

const schema = new Schema<Activity>(
  {
    activity: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ActivityModel = model<Activity>('activity', schema);
