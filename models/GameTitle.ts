import { Schema, model, Document, Model } from 'mongoose';

interface IGameTitle extends Document {
  title: string;
  gameGenerated: boolean;
  imageName: string;
}

const gameTitleSchema: Schema<IGameTitle> = new Schema({
  title: { type: String, required: true },
  gameGenerated: { type: Boolean, required: true, default: false },
  imageName: { type: String, required: true, default: 'byp-new-game'}
});

// add text index on the 'title' field for text search
gameTitleSchema.index({ title: 'text' });

const GameTitle: Model<IGameTitle> = model<IGameTitle>('GameTitle', gameTitleSchema);

export default GameTitle;
