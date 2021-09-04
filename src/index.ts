import mongoose from 'mongoose';
import { app } from './app';
require('dotenv').config()

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  try {
    await mongoose.connect(`${process.env.MONGO_CONNECTION}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(Number(process.env.PORT), () => {
    console.log(`Listening on port ${process.env.PORT}!`);
  });
};

start();
