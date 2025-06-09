import { CollectionConfig } from 'payload/types';
import { formatSlug } from '../utils/formatSlug';
import Users from './Users';
import Categories from './Categories';
import Tags from './Tags';
import Media from './Media';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: Users.slug,
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: Categories.slug,
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: Tags.slug,
      hasMany: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: Media.slug,
    },
  ],
  hooks: {
    beforeValidate: [({ data }) => {
      if (typeof data.title === 'string' && !data.slug) {
        data.slug = formatSlug(data.title);
      }
      return data;
    }],
  },
};

export default Posts;
