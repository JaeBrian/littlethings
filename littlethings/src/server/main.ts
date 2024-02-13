import express from 'express';
import ViteExpress from 'vite-express';
import Database from 'better-sqlite3';

const app = express();

// const usersTable = sqliteTable('users', {
//   id: text('id').primaryKey(),
//   firstName: text('first_name'),
//   lastName: text('last_name'),
//   email: text('email'),
// });

// // Set up the database connection
// const sqlite = new Database('sqlite.db');
// const db: BetterSQLite3Database = drizzle(sqlite);

// // Apply any migrations
// migrate(db, { migrationsFolder: 'drizzle' });

// async function startServer() {
//   const app = express();
//   const vite = await createServer({
//     server: { middlewareMode: 'html' },
//   });

//   // Use Vite's middleware
//   app.use(vite.middlewares);

//   // Route to fetch all users
//   app.get('/users', async (req, res) => {
//     try {
//       const users = await db.select(usersTable).all();
//       res.json(users);
//     } catch (error) {
//       console.error('Failed to fetch users:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
// }

app.get('/hello', (_, res) => {
  res.send('REQUESTS ARE WORKING');
});

ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening on port 3000...')
);
