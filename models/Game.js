import {Schema, model} from 'mongoose';

const ageRatingSchema = new Schema({ title: {type: String, required: true}, rating: {type: String, required: true} });
const releaseDateSchema = new Schema({ title: {type: String, required: true}, date: {type: String, required: true} });
const creditSchema = new Schema({ title: {type: String, required: true}, entries: {type: [String], required: true} });

const gameSchema = new Schema(
    {
      title: {
        type: String,
        required: true
      },
      platforms: [String],
      ageRatings: [ageRatingSchema],
      releaseDates: [releaseDateSchema],
      developers: [String],
      publishers: [String],
      genres: [String],
      gameModes: [String],
      series: String,
      credits: [creditSchema],
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

// Initialize our Application model
export default model('game', gameSchema);