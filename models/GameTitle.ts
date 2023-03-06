import { Schema, model } from 'mongoose';

const gameTitleSchema = new Schema({
  title: { type: String, required: true }
});

// add text index on the 'title' field for text search
gameTitleSchema.index({ title: 'text' });
export default model('GameTitle', gameTitleSchema)