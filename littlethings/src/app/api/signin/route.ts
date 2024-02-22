import { NextResponse } from 'next/server';
import { sql, eq, or } from 'drizzle-orm';
import { db } from '../../../../lib/db';
import { users } from '../../../../lib/schema';
import '../lib/config';
import { insertUser } from '../../../../lib/db';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { username, password, email, firstname, lastname } =
      await request.json();

    if (!username || !password || !email) {
      return new Response('Missing information', { status: 400 });
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(or(eq(users.username, username), eq(users.email, email)))
      .execute();
    if (existingUser.length > 0) {
      return new Response('User already exists', { status: 409 });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await db
      .insert(users)
      .values({
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: hashedPassword,
        email: email,
      })
      .execute();

    return new Response('User created successfully', { status: 201 });
  } catch (error) {
    console.error('Signup error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
