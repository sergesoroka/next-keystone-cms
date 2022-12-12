import dotenv from 'dotenv';
dotenv.config();

import { config } from '@keystone-6/core';

import { lists } from './schema';

import { withAuth, session } from './auth';

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: process.env.POSTGRES_URI,
      idField: { kind: 'autoincrement' }
    },
    lists,
    session,
    server: {
      cors: { origin: ['https://next-keystone.vercel.app/'], credentials: true },
    }
  })
);