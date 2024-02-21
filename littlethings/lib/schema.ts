import { bigint } from 'drizzle-orm/mysql-core';
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  }
);

// export const littlethings = pgTable('littlethings', {
//   id: serial('id').primaryKey(),
//   user._id: bigint references user table id,
//   content: text
//   created_at:
//   updated at,
// });

// export const follows = pgTable('follows', {
//   user_id: bigint referneces user id
//   follower_id, references user id
//   created at
//   updated at
//   unique(user_id, follower_id)
// })