import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { db } from '../../../../lib/db';
import { users } from '../../../../lib/schema';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        {
          message: 'missing username or password',
        },
        { status: 400 }
      );
    }

    const user = await db
      .select()
      .from(users)
      .where(eq(users.username, username));

    if (!user) {
      return NextResponse.json(
        {
          message: 'user not found',
        },
        { status: 404 }
      );
    }

    console.log('user', user);
    const match = await bcrypt.compare(password, user[0].password);

    if (!match) {
      return NextResponse.json(
        {
          message: 'invalid username or password',
        },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json(
      {
        message: 'login successful',
        id: user[0].id,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'invalid username or password',
      },
      {
        status: 401,
      }
    );
  }
}
