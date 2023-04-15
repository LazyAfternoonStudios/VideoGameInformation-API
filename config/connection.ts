import mongoose, { Connection } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { connect } = mongoose;

connect(process.env.COSMOS_ENDPOINT!);

const connection: Connection = mongoose.connection;

export default connection;
