import { Schema, Model, model } from 'mongoose';
import {} from 'mongodb';

interface Activity {
  activity: string;
  date: Date;
}

const schema = new Schema<Activity, Model<Activity>, Activity>(
  {
    activity: {
      type: String,
      required: true,
    },
    date: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const ActivityModel = model<Activity>('activity', schema);
