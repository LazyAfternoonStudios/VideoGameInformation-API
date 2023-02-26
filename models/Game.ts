import { Schema, model, Document } from 'mongoose';

interface ReleaseDate extends Document {
  title: string;
  date: string;
}

const releaseDateSchema = new Schema<ReleaseDate>({
  title: { type: String, required: true },
  date: { type: String, required: true },
});

interface Credit extends Document {
  title: string;
  entries: string[];
}

const creditSchema = new Schema<Credit>({
  title: { type: String, required: true },
  entries: { type: [String], required: true },
});

interface AgeRating extends Document {
  title: string;
  rating: string;
}

const ageRatingSchema = new Schema<AgeRating>({
  title: { type: String, required: true },
  rating: { type: String, required: true },
});

interface GameModel extends Document {
  title: string;
  platforms: string[];
  gameId: number;
  ageRatings: AgeRating[];
  releaseDates: ReleaseDate[];
  developers: string[];
  publishers: string[];
  genres: string[];
  gameModes: string[];
  series?: string;
  credits: Credit[];
  createdAt: Date;
}

const gameSchema = new Schema<GameModel>(
  {
    title: {
      type: String,
      required: true,
    },
    platforms: [String],
    gameId: {
      type: Number,
      required: true,
    },
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
  },
);

// Initialize our Application model
export default model<GameModel>('game', gameSchema);
