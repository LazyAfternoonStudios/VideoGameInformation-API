import mongoose, { Connection } from 'mongoose';

const { connect } = mongoose;

connect(process.env.COSMOS_ENDPOINT!);

const connection: Connection = mongoose.connection;

export default connection;
