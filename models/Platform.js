import {Schema, model} from 'mongoose';

const releaseDateSchema = new Schema({ title: {type: String, required: true}, date: {type: String, required: true} });
const launchPriceSchema = new Schema({ title: {type: String, required: true}, price: {type: String, required: true} });
const specSchema = new Schema({ title: {type: String, required: true}, value: {type: String, required: true} });
const specCategorySchema = new Schema({ category: {type: String, required: true}, data: [specSchema] });

const platformSchema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        enum: ['Console', 'Handheld', 'Mobile Phone', 'Computer', 'Arcade', 'Software', 'Console & Handheld', 'Other'],
        required: true
      },
      platformId: {
        type: Number,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      releaseDates: [releaseDateSchema],
      launchPrices: [launchPriceSchema],
      unitsSold: {
        type: Number,
        default: 0
      },
      specs: [specCategorySchema],
      gamesReleased: {
        type: Number,
        default: 0
      },
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
export default model('platform', platformSchema);