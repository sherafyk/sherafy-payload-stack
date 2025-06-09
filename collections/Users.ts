import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      unique: true,
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      required: true,
    },
  ],
};

export default Users;
