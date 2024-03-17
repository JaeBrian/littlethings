import { getPostByUserId, getUserById } from '../../../../lib/db';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import clsx from 'clsx';

export async function getData() {
  try {
    const res = await getPostByUserId(6);
    return res;
  } catch (error) {
    console.log('error', error);
    throw new Error('failed to fetch');
  }
}

export async function getName() {
  try {
    const res = await getUserById(6);
    return res;
  } catch (error) {
    console.log('error getting user', error);
    throw new Error('failed to fetch userbyId');
  }
}

export default async function Profile({}) {
  const posts = await getData();
  const user = await getName();
  console.log('user', user);
  console.log('here', posts);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', // 'long', 'short', 'narrow', or undefined
    year: 'numeric', // 'numeric' or '2-digit'
    month: 'long', // 'numeric', '2-digit', 'long', 'short', or 'narrow'
    day: 'numeric', // 'numeric' or '2-digit'
  };

  return (
    <>
      {user ? (
        <div className="text-blue flex flex-col justify-center items-center mt-20 mb-40">{`${user.username}'s little things`}</div>
      ) : (
        <div>User Not Found</div>
      )}
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="text-black flex flex-col justify-center items-center border border-gray-200 p-4"
          >
            <div>{post.id}</div>
            <div>{post.createdAt.toLocaleDateString('en-US', options)}</div>
            <div>{post.frequency}</div>
            <div>{post.title}</div>
            <div>{post.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}
