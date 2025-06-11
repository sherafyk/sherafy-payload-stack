import express from 'express';
import payload from 'payload';
import dotenv from 'dotenv';
import payloadConfig from './payload.config.js';

dotenv.config();
const app = express();

(async () => {
  await payload.init({ config: payloadConfig, express: app } as any);
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Admin UI → ${payload.getAdminURL()}`)
  );
})();
