// Import buildConfig directly from the payload package. Recent versions no
// longer expose `payload/config` as an export which caused build failures
// during `docker compose` on production servers.
const { buildConfig } = require("payload");
// Default rich text editor; required to avoid build errors in Payload v3.42+
const { slateEditor } = require('@payloadcms/richtext-slate');
const { webpackBundler } = require('@payloadcms/bundler-webpack');
const Users = require('./collections/Users').default;
const Media = require('./collections/Media').default;
const Pages = require('./collections/Pages').default;
const Posts = require('./collections/Posts').default;
const Categories = require('./collections/Categories').default;
const Tags = require('./collections/Tags').default;

module.exports = buildConfig({
  bundler: webpackBundler(),
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
