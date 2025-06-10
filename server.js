import express from 'express';
import payload from 'payload';
import dotenv from 'dotenv';
import payloadConfig from './payload.config.ts';

dotenv.config();

const app = express();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    config: payloadConfig,
  });

  const port = process.env.PORT || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });
};

start();
