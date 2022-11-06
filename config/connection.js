import mongoose from 'mongoose';

export default mongoose.connect(process.env.COSMOS_ENDPOINT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

