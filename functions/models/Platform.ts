import { Schema, Model, model, Document } from 'mongoose';

interface ReleaseDate {
  title: string;
  date: string;
}

interface LaunchPrice {
  title: string;
  price: string;
}

interface Spec {
  title: string;
  value: string;
}

interface SpecCategory {
  category: string;
  data: Spec[];
}

export interface PlatformDoc extends Document {
  name: string;
  type: 'Console' | 'Handheld' | 'Mobile Phone' | 'Computer' | 'Arcade' | 'Software' | 'Console & Handheld' | 'Other';
  platformId: number;
  company: string;
  releaseDates: ReleaseDate[];
  launchPrices: LaunchPrice[];
  unitsSold: number;
  specs: SpecCategory[];
  gamesReleased: number;
  createdAt: Date;
}

const releaseDateSchema = new Schema<ReleaseDate>({
  title: { type: String, required: true },
  date: { type: String, required: true }
});

const launchPriceSchema = new Schema<LaunchPrice>({
  title: { type: String, required: true },
  price: { type: String, required: true }
});

const specSchema = new Schema<Spec>({
  title: { type: String, required: true },
  value: { type: String, required: true }
});

const specCategorySchema = new Schema<SpecCategory>({
  category: { type: String, required: true },
  data: [specSchema]
});

const platformSchema = new Schema<PlatformDoc>({
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
}, {
  toJSON: {
    getters: true,
  },
  id: false,
});

const Platform: Model<PlatformDoc> = model<PlatformDoc>('platform', platformSchema);

export default Platform;
