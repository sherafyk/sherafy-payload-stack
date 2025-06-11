import express from 'express';
import payload from 'payload';
import dotenv from 'dotenv';
import payloadConfig from './payload.config.ts';

dotenv.config();

const app = express();

const start = async () => {
  await payload.init({
    config: payloadConfig,
    express: app,
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Admin UI → ${payload.getAdminURL()}`);
  });
};

start();
