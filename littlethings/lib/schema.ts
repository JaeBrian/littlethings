import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  bigint,
  bigserial,
  index,
} from 'drizzle-orm/pg-core';

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  }
);

export const littlethings = pgTable('littlethings', {
  id: serial('id').primaryKey(),
  user_id: bigint('user_id', { mode: 'number' })
    .notNull()
    .references(() => users.id),
  content: text('content'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const follows = pgTable('follows', {
  user_id: bigint('user_id', { mode: 'number' })
    .notNull()
    .references(() => users.id),
  follower_id: bigint('follower_id', { mode: 'number' })
    .notNull()
    .references(() => users.id),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const posts = pgTable(
  'posts',
  {
    id: serial('id').primaryKey(),
    user_id: bigint('user_id', { mode: 'number' })
      .notNull()
      .references(() => users.id),
    title: text('title').notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (posts) => {
    return {
      userIndex: index('posts_user_id_index').on(posts.user_id),
    };
  }
);

export const follow = pgTable(
  'follow',
  {
    user_id: bigint('user_id', { mode: 'number' })
      .notNull()
      .references(() => users.id),
    follower_id: bigint('follower_id', { mode: 'number' })
      .notNull()
      .references(() => users.id),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (follows) => {
    return {
      // Define the index on user_id within the follows table
      userIdIndex: index('follows_user_id_index').on(follows.user_id),
    };
  }
);

// export const followers = pgTable(
//   'followers',
//   {
//     user_id: bigint('user_id', { mode: 'number' })
//       .notNull()
//       .references(() => users.id),
//     follower_id: bigint('follower_id', { mode: 'number' })
//       .notNull()
//       .references(() => users.id),
//     createdAt: timestamp('createdAt').defaultNow().notNull(),
//     updatedAt: timestamp('updatedAt').defaultNow().notNull(),
//   },
//   (followers) => {
//     return {
//       userIdIndex: index('follows_user_id_index').on(followers.user_id),
//       followerIdIndex: index('followers_follower_id_index').on(
//         followers.follower_id
//       ),
//     };
//   }
// );
