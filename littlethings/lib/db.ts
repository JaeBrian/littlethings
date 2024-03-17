import '../lib/config';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { users, posts, littlethings } from './schema';
import * as schema from './schema';
import { eq } from 'drizzle-orm';

// import { sql } from 'drizzle-orm';

export const db = drizzle(sql, { schema });

export const getUsers = async () => {
  const selectResult = await db.select().from(users);
  console.log('Results', selectResult);
  return selectResult;
};

export type NewUser = typeof users.$inferInsert;

export const insertUser = async (user: NewUser) => {
  return db.insert(users).values(user).returning();
};

export type NewPost = typeof posts.$inferInsert;

export const insertPost = async (post: NewPost) => {
  return db.insert(posts).values(post).returning();
};

export const getPostByUserId = async (userId: number) => {
  const result = await db.select().from(posts).where(eq(posts.user_id, userId));
  return result;
};

export const getUserById = async (userId: number) => {
  const result = await db.select().from(users).where(eq(users.id, userId));
  return result.length > 0 ? result[0] : null;
};
