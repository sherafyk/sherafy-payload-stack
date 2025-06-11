import type { CollectionConfig } from 'payload/dist/collections/config/types';
import { formatSlug } from '../utils/formatSlug';

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },
  ],
  hooks: {
    beforeValidate: [({ data }) => {
      if (typeof data.name === 'string' && !data.slug) {
        data.slug = formatSlug(data.name);
      }
      return data;
    }],
  },
};

export default Tags;
