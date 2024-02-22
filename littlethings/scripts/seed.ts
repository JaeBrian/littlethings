import { NewUser, insertUser, insertPost, db, NewPost } from '../lib/db';
import { users } from '../lib/schema';
import { sql } from 'drizzle-orm';

async function main() {
  const newUser: NewUser = {
    firstname: 'jae',
    lastname: 'brian',
    email: 'jae@gmail.com',
    password: 'testing',
    username: 'pasta',
  };
  const res = await insertUser(newUser);
  console.log('insert user success', res);
  process.exit();
}

export const findById = async (userId: number) => {
  const result = await db
    .select()
    .from(users)
    .where(sql`${users.id} = ${userId}`);
  return result[0];
};

async function post() {
  try {
    const user = await findById(8);
    if (!user.id) {
      console.log('user not found');
      return;
    }
    const newPost: NewPost = {
      frequency: 'monthly',
      user_id: user.id,
      title: 'eat',
      content: 'chicken',
    };
    const insertedPost = await insertPost(newPost);
    console.log('success', insertedPost);
    process.exit();
  } catch (error) {
    console.error('error posting seed', error);
  }
}

post();

// main();
