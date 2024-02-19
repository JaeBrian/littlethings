import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id'),
  username: text('username'),
  email: text('email'),
  password: text('password'),
});
