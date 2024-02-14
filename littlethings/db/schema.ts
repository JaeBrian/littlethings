import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  firstName: text('first_name'),
  lastName: text('last_name'),
  email: text('email'),
  password: text('password'),
});
