import { NextResponse } from 'next/server';
import { sql, eq } from 'drizzle-orm';
import { db } from '../../../../lib/db';
import { users } from '../../../../lib/schema';
import '../lib/config';

export async function POST(request: Request) {
  const json = await request.json();
  const res = await db.select().from(users).where(eq(users.id, 4));
  return NextResponse.json({ data: res[0] });
}
