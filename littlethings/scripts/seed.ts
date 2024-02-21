import { NewUser, insertUser } from '../lib/db';

async function main() {
  const newUser: NewUser = {
    email: 'foo@example.com',
    password: 'random password',
    name: 'foo',
  };
  const res = await insertUser(newUser);
  console.log('insert user success', res);
  process.exit();
}

main();
