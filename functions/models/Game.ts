import { Schema, model, Document } from 'mongoose';

interface IReleaseDate extends Document {
  title: string;
  date: string;
}

const releaseDateSchema = new Schema<IReleaseDate>({
  title: { type: String, required: true },
  date: { type: String, required: true },
});

interface ICredit extends Document {
  title: string;
  entries: string[];
}

const creditSchema = new Schema<ICredit>({
  title: { type: String, required: true },
  entries: { type: [String], required: true },
});

interface IAgeRating extends Document {
  title: string;
  rating: string;
}

const ageRatingSchema = new Schema<IAgeRating>({
  title: { type: String, required: true },
  rating: { type: String, required: true },
});
interface GameModel extends Document {
  title: string;
  platforms: string[];
  gameId: number;
  imageName: string;
  ageRatings: IAgeRating[];
  releaseDates: IReleaseDate[];
  developers: string[];
  publishers: string[];
  genres: string[];
  gameModes: string[];
  series?: string;
  credits: ICredit[];
  summary: string;
  relatedGames: string[];
  createdAt: Date;
}

const gameSchema = new Schema<GameModel>(
  {
    title: {
      type: String,
      required: true,
    },
    platforms: {
      type: [String],
      required: true,
      default: [],
    },
    gameId: {
      type: Number,
      required: true,
      increment: true
    },
    imageName: {
      type: String,
      required: true,
      default: "byp-new-game"
    },
    ageRatings: {
      type: [ageRatingSchema],
      required: true,
      default: [],
    },
    releaseDates: {
      type: [releaseDateSchema],
      required: true,
      default: [],
    },
    developers: {
      type: [String],
      required: true,
      default: [],
    },
    publishers: {
      type: [String],
      required: true,
      default: [],
    },
    genres: {
      type: [String],
      required: true,
      default: [],
    },
    gameModes: {
      type: [String],
      required: true,
      default: [],
    },
    series: String,
    credits: {
      type: [creditSchema],
      required: true,
      default: [],
    },
    summary: {
      type: String,
      required: true,
    },
    relatedGames: {
      type: [String],
      required: true,
      default: [],
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
  },
);

// Initialize our Application model
export default model<GameModel>('game', gameSchema);
