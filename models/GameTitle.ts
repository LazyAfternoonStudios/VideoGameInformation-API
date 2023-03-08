import { Schema, model, Document, Model } from 'mongoose';

interface IGameTitle extends Document {
  title: string;
}

const gameTitleSchema: Schema<IGameTitle> = new Schema({
  title: { type: String, required: true }
});

// add text index on the 'title' field for text search
gameTitleSchema.index({ title: 'text' });

const GameTitle: Model<IGameTitle> = model<IGameTitle>('GameTitle', gameTitleSchema);

export default GameTitle;
