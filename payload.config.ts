import { buildConfig } from 'payload/config';
import Users from './collections/Users';

export default buildConfig({
  serverURL: process.env.SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [Users],
});
