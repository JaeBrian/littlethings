import { getUsers } from '../../../lib/db';
export default async function MainPage() {
  const data = await getUsers();
  return <div className="text-white"> SQL DATA: {JSON.stringify(data)} </div>;
}
