import mongoose from 'mongoose';
const { connect, connection} = mongoose;
import dotenv from 'dotenv';
dotenv.config();

connect(process.env.COSMOS_ENDPOINT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default connection;
