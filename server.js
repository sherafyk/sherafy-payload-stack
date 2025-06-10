import express from 'express';
import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();
const payloadConfig = (await import('./payload.config.ts')).default;

const app = express();

const start = async () => {
  await payload.init({
    express: app,
    config: payloadConfig,
  });

  const port = process.env.PORT || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });
};

start();
