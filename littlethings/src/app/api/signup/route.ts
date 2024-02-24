import { NextResponse } from 'next/server';
import { sql, eq, or } from 'drizzle-orm';
import { db } from '../../../../lib/db';
import { users } from '../../../../lib/schema';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { username, password, email, firstname, lastname } =
      await request.json();

    if (!username || !password || !email) {
      return NextResponse.json(
        { message: 'Missing information' },
        { status: 400 }
      );
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(or(eq(users.username, username), eq(users.email, email)))
      .execute();
    if (existingUser.length > 0) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 }
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await db
      .insert(users)
      .values({
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: hashedPassword,
        email: email,
      })
      .returning();

    return NextResponse.json(
      { message: 'User created successfully', id: newUser[0].id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { message: 'Sign up unsuccessful' },
      { status: 500 }
    );
  }
}

export async function GET(request: Response) {
  try {
    const url = new URL(request.url);
    const username = url.searchParams.get('username');

    if (!username) {
      return NextResponse.json(
        { message: 'invalid username' },
        { status: 400 }
      );
    }
    const user = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .execute();

    if (!user) {
      return NextResponse.json({ message: 'user not found' }, { status: 404 });
    }

    // const userData = user.map(({ password, ...rest }) => rest);

    return NextResponse.json(
      { message: 'fetched user successfully', user: user[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error getting user', error);
    return NextResponse.json(
      { message: 'Fetching user unsuccessful' },
      { status: 500 }
    );
  }
}
