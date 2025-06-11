import type { CollectionConfig } from 'payload/dist/collections/config/types';
import { formatSlug } from '../utils/formatSlug';

const Pages: CollectionConfig = {
  slug: 'pages',
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
      name: 'layout',
      type: 'richText',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      defaultValue: 'draft',
    },
    {
      name: 'publishedDate',
      type: 'date',
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

export default Pages;
