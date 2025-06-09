import { buildConfig } from 'payload/config';
import Users from './collections/Users';
import Media from './collections/Media';
import Pages from './collections/Pages';
import Posts from './collections/Posts';
import Categories from './collections/Categories';
import Tags from './collections/Tags';

export default buildConfig({
  serverURL: process.env.SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    Pages,
    Posts,
    Categories,
    Tags,
  ],
});
