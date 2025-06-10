import { buildConfig } from 'payload';
import { slateEditor } from '@payloadcms/richtext-slate';
import { mongooseAdapter } from '@payloadcms/db-mongodb';

import Users from './collections/Users';
import Media from './collections/Media';
import Pages from './collections/Pages';
import Posts from './collections/Posts';
import Categories from './collections/Categories';
import Tags from './collections/Tags';

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET,
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  serverURL: process.env.SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  // Configure the default rich text editor
  editor: slateEditor({}),
  collections: [
    Users,
    Media,
    Pages,
    Posts,
    Categories,
    Tags,
  ],
});
