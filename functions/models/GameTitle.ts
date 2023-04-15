import { Schema, model, Document, Model } from 'mongoose';

interface IGameTitle extends Document {
  title: string;
  gameGenerated: boolean;
  imageName: string;
  lazyAfternoonContent: boolean;
  contentAddedDate: Date;
  platforms: string[];
  genres: string[];
}

const gameTitleSchema: Schema<IGameTitle> = new Schema({
  title: { type: String, required: true },
  gameGenerated: { type: Boolean, required: true, default: false },
  imageName: { type: String, required: true, default: 'byp-new-game'},
  lazyAfternoonContent: { type: Boolean, required: true, default: false },
  contentAddedDate: { type: Date, required: false},
  platforms: { type: [String], required: true, default: [] },
  genres: { type: [String], required: true, default: [] },
});

// add text index on the 'title' field for text search
gameTitleSchema.index({ contentAddedDate: 1, title: 1 });

const GameTitle: Model<IGameTitle> = model<IGameTitle>('GameTitle', gameTitleSchema);

export default GameTitle;
