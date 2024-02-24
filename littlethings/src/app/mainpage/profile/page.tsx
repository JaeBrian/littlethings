import { getPostByUserId } from '../../../../lib/db';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export async function getData() {
  try {
    const res = await getPostByUserId(7);
    return res;
  } catch (error) {
    console.log('error', error);
    throw new Error('failed to fetch');
  }
}

export default async function Profile({}) {
  const posts = await getData();
  console.log('here', posts);

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="text-black flex flex-col justify-center items-center"
        >
          <div>{post.title}</div>
          <div>{post.content}</div>
        </div>
      ))}
    </>
  );
}
