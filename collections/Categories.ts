import { CollectionConfig } from 'payload/types';
import { formatSlug } from '../utils/formatSlug';

const Categories: CollectionConfig = {
  slug: 'categories',
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
    {
      name: 'description',
      type: 'textarea',
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

export default Categories;
